import UserRepository from "repositories/user_repository"

export default function Register(req, res) {

    const userRepository = new UserRepository();

    (async () => {
        let payload = {}
        try {
            const user = req.body.user
            if (!user.name || !user.email || !user.password) {
                throw new Error('ATENÇÃO: campo(s) em branco!')
            }

            const createdUser = await userRepository.create(user)
            payload = {
                status: 'success',
                data: createdUser
            }
        } catch (error) {
            console.log(error)
            payload = {
                status: 'error',
                data: null,
                message: error.message || error
            }
        }
        res.json(payload)
    })()
}
