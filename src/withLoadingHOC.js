function withLoadingHOC (Component) {
    return function HOC (props) {
        const {loading} = props
        if(loading){
            return (<p>Fetching Data,Please wait...</p>)
        }
        return <Component users={props.users}/>
    }
}

export default withLoadingHOC;