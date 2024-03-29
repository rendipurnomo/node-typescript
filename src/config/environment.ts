import 'dotenv/config'

const config = {
  db: process.env.DB,
  jwt_public: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoJX7mm+zfflD9yAU0KPq
PwsoJadISh+YaqrGibJKqTX08FXg7Wd4fGd6jNz1dVOxUMHIieBTuBoTRI0WjFQL
y0IxYrKy8aLWqfDal71txsH4V43JxBm9JVwT+EJZ/RKCSdQRxxfYrqmx1KT5zyla
sHv4is1c0DFXGVTEbouF9yDYugkYcirU5tuavVin185J0ykQc5Dr/EZR6DtpI/nC
6GOs+zFl8nH53ACp515lSM15AGkb2AZAT1B1wvkiSqshvLTVDSISVMPoHPlSLTRP
eJSccXMnLzdxS0dPbih8aTvqr1UgMAsfXwQBn+S41Er98NVlOA7RvXLIb70w1S3m
/QIDAQAB
-----END PUBLIC KEY-----`,
  jwt_private: `-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAoJX7mm+zfflD9yAU0KPqPwsoJadISh+YaqrGibJKqTX08FXg
7Wd4fGd6jNz1dVOxUMHIieBTuBoTRI0WjFQLy0IxYrKy8aLWqfDal71txsH4V43J
xBm9JVwT+EJZ/RKCSdQRxxfYrqmx1KT5zylasHv4is1c0DFXGVTEbouF9yDYugkY
cirU5tuavVin185J0ykQc5Dr/EZR6DtpI/nC6GOs+zFl8nH53ACp515lSM15AGkb
2AZAT1B1wvkiSqshvLTVDSISVMPoHPlSLTRPeJSccXMnLzdxS0dPbih8aTvqr1Ug
MAsfXwQBn+S41Er98NVlOA7RvXLIb70w1S3m/QIDAQABAoIBACK9j7rvY2NjY6K4
3AfvDiQpY7wRnn/6qdyZqW3sll5Y/+5mhcyWT+iJ8mc6/hctzfRsl9fMIhB4A6cW
5sPhAtQsM8boZfIEinAlXQTqxC71k6ZNVFMKRnMoomFY6WLoeCtEp7vsmsHekEwy
jKCWj7oSd8h/eQ7JPdCLGBvaL1cw+haXwRfNd1W4TxxEfV41rcD4AR/lxbOkTXQU
9VPEwR4oA27XrhsO+oxVJlwcyJI4WwsdyTD7aQCYLQdixHyctV4TMXrmFxpkBrFx
WpYKPV/CpdVxdsFwGaEf8EL8KtE2s/HLpPeReCqEruhBY6u7yX5Hpn/N7INZSeRE
GbqaHXkCgYEA1gtvGjIzStoqXKJGtS7UCr2W8MvhmUSVgCTRMDCeNL2ugwBH/JsI
qBH1hoTwZ7Ins0WVE4TjJiUd829HrU6rwFgjvwvV/nS59ecq+FAjPRluygcsKzIB
Af1Vln2p8botLnOpmDtwxJ2gTz5TKiW4tZEMt0ke837vkXztkSRbJmMCgYEAwBAJ
C0teS1ZU7LK/ug86huZgW/bc53BCsXjV64NDfRG70Olpz0Xp2af1fpTSXtIblX5K
AXxUk4nD52nC8Ae2ZdtLN3rAJHpmA00GgU8hZ7R7DePzxy05/ZnS7gIAQrkkPL9q
Qy0AoRo12DW5EMYy2hYFn3ZQdnh58o9SYu/qCx8CgYEAxrAYcuW0jUAU4KZWImuU
s1+oFF/9S4vJhwkmEaifwu9sZfhF2muDTphVJIiUrH1IsvXdWyAYxtjfg5CBpZOI
hOSMUhRHkYuC74ulbJjfDSFloS2lR3eETfd+klKWBWg/9oWxITnUBP8Yx1ZgVphr
bEd32U+L5pWnBpND514rKmcCgYA5cJJD3naE8XzUjWDptEQ8tAl9d4b5cImBqjHQ
DaHRdcxF3ojWhII7pg+1m6yOzyeQvgREDXr95OXB/89dGfFi5QLJxNxSDIkV06Nu
aMwEx+VFcjcmClCdl7ONmuuZCOXdhSGylXLqu3v+/ZIrghsTPiLQXgISbFWMRXDO
RhIo4QKBgAeJM2M48JQyvNeavVp5TLFtN1dwebEEdlKhXcVZdS6VVKZQqHM+lA9W
dPcQMjq9vseHuHiL+j9mz3qZ3G4fO38Al4zAuo9vHs5ZDEIi+V7PLiMS6mK/+lMy
h+M7SOORT9/2tDDyWVH5rg+yOYMkgR/qPi/wrHAWse/bAQDcECFY
-----END RSA PRIVATE KEY-----`
}

export default config
