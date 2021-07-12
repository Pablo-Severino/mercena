import UserModel from 'models/v1/user_model'

class UserRepository 
{
    constructor() { }

    create(userData)
    {
        const user = UserModel.create(userData);

        return user;
    }
}

export default UserRepository
