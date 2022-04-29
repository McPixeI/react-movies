import { createContext, useContext, useEffect, useState } from 'react'
import { useLocalStorageState } from '../utils/hooks/use-local-storage-state'
import { STATUSES } from '../utils/constants/statuses'
import axios from 'axios'
import { API_KEY } from '../utils/constants/api'

const AuthContext = createContext()
AuthContext.displayName = 'AuthContext'

function AuthProvider ({ children }) {
  const [requestToken, setRequestToken] = useLocalStorageState('request_token', '')
  const [sessionId, setSessionId] = useLocalStorageState('session_id', '')

  const [state, setState] = useState({
    status: STATUSES.IDLE,
    error: null,
    sessionId: ''
  })

  useEffect(() => {
    ;(async () => {
      const initialSessionId = sessionId || ''

      try {
        if (!requestToken && initialSessionId) {
          setState({
            ...state,
            status: STATUSES.RESOLVED,
            sessionId: initialSessionId
          })
          return
        }
        if (!requestToken) {
          return
        }
        const response = await axios.post(
          `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
          {
            'content-type': 'application/json',
            request_token: requestToken
          }
        )

        const sessionRequestResults = response.data
        const sessionId = sessionRequestResults.session_id

        setRequestToken('')
        setSessionId(sessionId)

        setState({
          status: STATUSES.RESOLVED,
          error: null,
          sessionId: sessionId
        })
      } catch (error) {
        console.log('AuthProvider useEffect errorr: ', error)
        setState({
          status: STATUSES.REJECTED,
          error,
          sessionId: ''
        })
      }
    })()
  }, [])

  const login = async () => {
    try {
      const currentURL = window.location.href
      setState({
        ...state,
        status: STATUSES.PENDING
      })
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
        )
        .then(res => res.data)

      const requestToken = response.request_token
      setRequestToken(requestToken)
      window.location.replace(
        `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${currentURL}`
      )
    } catch (error) {
      console.log('Login error: ', error)
      setState({
        ...state,
        status: STATUSES.REJECTED,
        error
      })
    }
  }

  const logout = async () => {
    try {
      setState({
        ...state,
        status: STATUSES.PENDING,
        error: null
      })

      await axios.delete(
        `https://api.themoviedb.org/3/authentication/session?api_key=${API_KEY}`,
        {
          session_id: state.sessionId
        }
      )
      setRequestToken('')
      sessionId('')

      setState({
        status: STATUSES.RESOLVED,
        error: null,
        sessionId: ''
      })
    } catch (error) {
      console.log('set logout error: ', error)
      setState({
        ...state,
        status: STATUSES.REJECTED,
        error
      })
    }
  }

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const { state = {}, login, logout } = useContext(AuthContext) || {}
  const isPending = state.status === STATUSES.PENDING
  const isError = state.status === STATUSES.REJECTED
  const isSuccess = state.status === STATUSES.RESOLVED
  const isAuthenticated = state.sessionId && isSuccess

  return {
    ...state,
    login,
    logout,
    isPending,
    isError,
    isSuccess,
    isAuthenticated
  }
}

export { AuthProvider, useAuth }
