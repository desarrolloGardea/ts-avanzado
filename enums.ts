enum ROLES {
    ADMIN = 'admin',
    SELLER = 'seller',
    CUSTOMER = 'customer'
}

type User = {
    username: string,
    role: ROLES
}
const myuser: User = {
    username: 'xa.red',
    role: ROLES.ADMIN
}