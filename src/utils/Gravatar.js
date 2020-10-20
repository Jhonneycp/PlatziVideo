import md5 from 'md5'

const gravatar = (email) => {
    const url = 'https://www.gravatar.com/avatar/'
    const formatteEmail = email.trim().toLowerCase()
    const hash = md5(formatteEmail, {encoding: "binary"})
    return `${url}${hash}`

}

export default gravatar