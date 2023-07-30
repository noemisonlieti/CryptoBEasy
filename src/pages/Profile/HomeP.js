import MainHeader from "@organisms/MainHeader";
import MainLayout from "@layouts/MainLayout";

import ButtonProfile from "@atoms/ButtonProfile";


export default function HomeP() {

    return (

        <MainLayout
            header={
                <MainHeader 
                    title="Profile"
                    subtitle={<span>Welcome, <span className="font-bold">Name</span></span>}
                />
            }
        >

            <div className="flex flex-col mt-8 gap-9">

                <ButtonProfile to="/profile/edit-user-data">
                    Edit user data
                </ButtonProfile>

                <ButtonProfile to="/profile/edit-password">
                    Edit user password
                </ButtonProfile>

                <ButtonProfile to="/profile/support">
                    Support
                </ButtonProfile>

                <ButtonProfile to="/profile/faq">
                    F.A.Q.
                </ButtonProfile>


                <ButtonProfile type="MiddleBlue" to="/">
                  Logout
                </ButtonProfile>


                       
        




               


            


            </div>

        </MainLayout>












    )
}