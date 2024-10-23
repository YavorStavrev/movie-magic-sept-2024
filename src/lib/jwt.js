import jsonwebtoken from 'jsonwebtoken';
import util from 'util';

//Convert callback based async function to a promise based async function
// export const verify = (token, secre, options) => {
//     const promise = new Promise((resolve,reject) => {
//         jsonwebtoken.verify(token, secret, options, (err, decoded) => {
//             if(err){
//                 return reject(err);
//             }

//             resolve(decoded);
//         });
//     });
//     return promise;
// }

const verify = util.promisify(jsonwebtoken.verify);
const sign = util.promisify(jsonwebtoken.sign);

export default {
    verify,
    sign,
}