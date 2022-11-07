import React from 'react';

export const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onNext, onBack }) => {

    const goToNext = stepData => {
        onNext(stepData);
    }

    const goToBack = stepData => {
        onBack(stepData);
    }

    const onboardingComplete = (stepData) => {
        onFinish(stepData);
    }

    /** helps to iterate over the children in a way which ensures performance 
    and determinism. We are using the React.Children.toArray method to ensure 
    that the children prop is always an array. If we do not do that, doing 
    children.length might blow because the children prop can be an object, 
    an array, or even a function. Also, if we try to use the array .map method 
    on children directly it might blow up.
    **/
    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext, goToBack, onboardingComplete });
    } 
        
    return currentChild;

}