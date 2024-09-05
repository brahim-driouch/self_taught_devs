import { getUserById, logout, registerNewUser, signInWithGoogle, updatePersonnalInfo } from "./users/userController";


const userController = {
    registerNewUser,
    logout,
    signInWithGoogle,
    getUserById,
    updatePersonnalInfo
}


export default userController