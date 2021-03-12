const jwt = require('jsonwebtoken')
const fs = require('fs')

const privateKEY = fs.readFileSync('./keypairs/private.pem')
const publicKEY = fs.readFileSync('./keypairs/public.pem')

const verifyOptions = {
    issuer: 'i',
    subject: 's',
    audience: 'a',
    expiresIn: 333,
    header: {
        typ: 'JWT',
        alg: 'RS256'
    }
}

const generateJWT = (payload) => {
    const signOptions = {
        issuer: 'i',
        subject: 's',
        audience: 'a',
        expiresIn: 333,
        header: {
            typ: 'JWT',
            alg: 'RS256'
        }
    }
    const options = signOptions
    if (payload && payload.exp) {
        delete options.expiresIn
    }
    return jwt.sign(payload, privateKEY, options)
}

function test_1() {
    const token = generateJWT({ role: 'admin' })
    console.log('Token: ' + token)
    console.log()
    const result = jwt.verify(token, publicKEY, verifyOptions)
    console.log(result)
}

function test_2() {
    const token = jwt.sign({ role: 'moderator', email: 'safarli@mail.ru'},
        'mysecret',
        { header: { alg: 'HS256', typ: 'JWT' }, issuer: 'com' })

    console.log(token)
    console.log()

    const decoded = jwt.verify(token, 'mysecret', {issuer: 'net'})
    console.log(decoded)
}

test_2()
