const crypto = require('crypto');


crypto.randomBytes(64, (err,buf)  => {
  // salt : 해독을 더 어렵게 하기 위해 하는것
  const salt = buf.toString('base64');
  console.log('salt', salt);
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('비밀번호', key.toString('base64'))
  })
})

