import { StackActions, NavigationActions } from 'react-navigation';

let _navigator = "this"

function setTopLevelNavigator(navigatorRef) {
    console.log('Setting Nav...')
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function navigateWithRest(routeName, params) {
    const resetAction = StackActions.reset({
        index:0,
        key:null,
        actions:[NavigationActions.navigate({routeName:routeName}),
       ],
       });
       _navigator.dispatch(resetAction);  
}


function goBack(key) {
    _navigator.dispatch(
        NavigationActions.back({
            key: key
        })
    );
}


function navigateHome(params){
    console.log('Navigating to home....')

    _navigator.dispatch(
        NavigationActions.navigate({
            routeName : 'MainTab',
            params
        })
    );
    
}

function navigateBillPaymentSuccess(params){
    console.log('Navigating to billPaymentSuccess..')

    _navigator.dispatch(
        NavigationActions.navigate({
            routeName : 'SuccessBillPayments',
            params
        })
    )
}

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack,
    setTopLevelNavigator,
    navigateWithRest,
    navigateHome,
    navigateBillPaymentSuccess
};
