import React, {useState} from 'react';
import { makeRequest } from '../../axios';
import { useMutation} from "@tanstack/react-query";
import { ControlledOnboardingFlow } from "../register/ControlledOnboardingFlow";
import SignUpPage from "./SignUpPage";
import AccountTypePage from './AccountTypePage';
import ProfilePage from './ProfilePage'
import SkillPage from './SkillPage';
import SuccessPage from "./SuccessPage";
import ClientInfo from "./ClientInfo";
import UsineInfo from "./UsineInfo";

const Register = () => {
    
    const [files, setFiles] = useState(null);
    const [onboardingData, setOnboardingData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "",
        clientStructure: "",
        usineStructure: "",
        lastName: "",
        firstName: "",
        telephone: "",
        currentJob: "",
        experience: "",
        city: "",
        charges: "",
        clientBrand: "",
        clientJobPosition: "",
        clientCity: "",
        usineName: "",
        usineJobPosition: "",
        usineCity: "",

    });
    const [currentIndex , setCurrentIndex] = useState(0);
    
    const onNext = () => {

        setCurrentIndex(currentIndex + 1);
        console.log(onboardingData)
        console.log(files)
    }

    const onBack = () => {

        setCurrentIndex(currentIndex - 1);
        console.log(files)
    }

    const upload = async () => {

        try {

            const formData = new FormData();
            formData.append("file", files);
            const res = await makeRequest.post("/upload", formData);
            return res.data;

        } catch (err) {
            console.log(err);
        }
    };

    const mutation = useMutation(
        (newRegister) => {
            return makeRequest.post("/auth/register", newRegister);
        }
    );

    const onFinish = () => {
        
         const handleClick = async () => {
            
            let imgUrl = "";
            if (files) imgUrl = await upload();
            mutation.mutate({ ...onboardingData, profilePic: imgUrl });
            setFiles(null);
        };

        return handleClick();
    }

    return (
        <>

        <ControlledOnboardingFlow
            currentIndex={currentIndex}
            onNext={onNext}
            onBack={onBack}
            onFinish={onFinish}
        >
            <SignUpPage
                onboardingData={onboardingData}
                setOnboardingData={setOnboardingData}
            />
            <AccountTypePage
                onboardingData={onboardingData}
                setOnboardingData={setOnboardingData} 
            />
            <ProfilePage 
                currentIndex={currentIndex} 
                onboardingData={onboardingData} 
                setOnboardingData={setOnboardingData}
                files={files}
                setFiles={setFiles}
            />

            {
                onboardingData.accountType === 'Freelance' &&  
                    <SkillPage
                        onboardingData={onboardingData}
                        setOnboardingData={setOnboardingData} 
                />
            }


            {
                onboardingData.accountType === 'Client' &&  
                    <ClientInfo
                        onboardingData={onboardingData}
                        setOnboardingData={setOnboardingData}
                        files={files}
                        setFiles={setFiles} 
                />
            }

            {
                onboardingData.accountType === 'Usine' &&  
                    <UsineInfo
                        onboardingData={onboardingData}
                        setOnboardingData={setOnboardingData}
                        files={files}
                        setFiles={setFiles} 
                />
            }

            <SuccessPage currentIndex={currentIndex} /> 

        </ControlledOnboardingFlow>

        </>
    );
    
}

export default Register;