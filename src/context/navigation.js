import { createContext, useEffect, useState } from 'react';

export const NavigationContext = createContext()

export const NavigationProvider = ({ children }) => {

  const [currentPath, setCurrentPath] = useState(window.location.pathname) // window location pathname returns the current url (path) that is inside the address bar
  // we do this to take the url that our application is in when it first starts up

  useEffect(() => {
    const handler = () => {
      // we use this state not to figure out what the current path is. but to cause a rerender when user clicks forward or bacward buttons to navigate
      setCurrentPath(window.location.pathname)
    }

    // popstate is used for navigating through back and forward buttons 
    // since pages are stored as a stack we use pushState to add to the history of pages
    // and popState to navigate locations(pages). you can only use popstate with the page routes you have added using
    // pushstate. using popstate will change the url but will not cause a full rerender which is what we want
    window.addEventListener('popstate', handler)

    return () => {
      window.removeEventListener('popstate', handler)
    }
  }, [])

  // user triggered navigation is when the user clicks to a link to navigate or uses back/forward buttons
  // programmatic navigation is to automatically navigate the user from code.
  const navigate = (to) => {

    // pushState is to update the address bar (url) (to add a new path (adds an entry to the browser's session history stack.))
    window.history.pushState({}, '', to)

    // and we call this to cause a rerender since pushState only updates the address bar
    setCurrentPath(to)
  }

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  )
}