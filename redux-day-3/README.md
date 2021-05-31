# Redux ToolKit Day 3

## [Redux ToolKit Documentation](https://redux-toolkit.js.org/)

</br>

## New hooks
[useRef](https://react-hooks-cheatsheet.com/useRef)
</br>
[useDispatch](https://react-redux.js.org/api/hooks#usedispatch)

## How to Add Action in Redux Store
1. Create a reducers directory inside src/store/
2. Create a reducer.js file inside src/store/reducers/ 
3. Add following line of code

![Action](src/RTK3.0.svg)

4. Create reducers inside the user Slice(This object of reducers will contain Actions)
5. addUser action contain two parameter state(in this case InitialState) and action(when a function is dipatch).
6. Don't forget to export addUser
## How to send Data from State/Store
UseDispatch Hook From React-Redux helps to send data to Store

1. Create a form on home page.
2. Add the following line of code
   
![useDispatch](src/RTK3.1.svg)

3. On submitting of form storeUser function is triggered.Calling dispatch to perform the action and store data inside state. 