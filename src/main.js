const a0_0x53d91e=a0_0x3e42;(function(_0x5a38db,_0x477321){const _0x370347=a0_0x3e42,_0xd76f4d=_0x5a38db();while(!![]){try{const _0x2bc980=parseInt(_0x370347(0x123))/0x1+parseInt(_0x370347(0x152))/0x2*(parseInt(_0x370347(0xc1))/0x3)+parseInt(_0x370347(0xa9))/0x4*(parseInt(_0x370347(0x12a))/0x5)+-parseInt(_0x370347(0x92))/0x6+parseInt(_0x370347(0x135))/0x7+parseInt(_0x370347(0x139))/0x8+parseInt(_0x370347(0xcd))/0x9*(-parseInt(_0x370347(0xcf))/0xa);if(_0x2bc980===_0x477321)break;else _0xd76f4d['push'](_0xd76f4d['shift']());}catch(_0x1d465b){_0xd76f4d['push'](_0xd76f4d['shift']());}}}(a0_0x1558,0x35f34));const axios=require(a0_0x53d91e(0xd5)),{ethers}=require(a0_0x53d91e(0xd9)),{SocksProxyAgent}=require(a0_0x53d91e(0xf7)),{HttpsProxyAgent}=require(a0_0x53d91e(0x101)),fs=require('fs'),path=require('path'),{createWallet,getAddress}=require(a0_0x53d91e(0xf6)),{provider,PRIVATE_KEYS,CONTRACT_ADDRESS,MIN_SWAP,MAX_SWAP}=require('../config/config'),{log}=require(a0_0x53d91e(0x121)),{CrocEnv}=require(a0_0x53d91e(0xa4)),{sendTelegramMessage}=require(a0_0x53d91e(0x105));function delay(_0xb2c438){return new Promise(_0x256d6c=>setTimeout(_0x256d6c,_0xb2c438));}const proxies=fs[a0_0x53d91e(0x8f)](path[a0_0x53d91e(0xe8)](__dirname,a0_0x53d91e(0x136)),a0_0x53d91e(0x115))[a0_0x53d91e(0x140)]()[a0_0x53d91e(0x9d)]('\x0a'),contract_goonusd='0x5c1409a46cd113b3a667db6df0a8d7be37ed3bb3',contract_goon='0xba22114ec75f0d55c34a5e5a3cf384484ad9e733',contract_stake='0xA34420e04DE6B34F8680EE87740B379103DC69f6',contract_nest=a0_0x53d91e(0x122),contract_land=a0_0x53d91e(0xb6),contract_stakeLAND=a0_0x53d91e(0xf0),stakeABI=[{'inputs':[{'internalType':a0_0x53d91e(0x110),'name':'amount','type':a0_0x53d91e(0x110)}],'name':a0_0x53d91e(0x13c),'outputs':[],'stateMutability':a0_0x53d91e(0xcc),'type':a0_0x53d91e(0xd0)},{'inputs':[],'name':'claim','outputs':[],'stateMutability':a0_0x53d91e(0xcc),'type':a0_0x53d91e(0xd0)}],ERC20_ABI=[{'constant':!![],'inputs':[{'name':a0_0x53d91e(0xa5),'type':a0_0x53d91e(0x8c)}],'name':'balanceOf','outputs':[{'name':a0_0x53d91e(0x9a),'type':a0_0x53d91e(0x110)}],'type':a0_0x53d91e(0xd0)},{'constant':![],'inputs':[{'name':'_spender','type':a0_0x53d91e(0x8c)},{'name':'_value','type':'uint256'}],'name':a0_0x53d91e(0x132),'outputs':[{'name':a0_0x53d91e(0xe5),'type':a0_0x53d91e(0xd7)}],'type':'function'}];function parseProxy(_0x40d978){const _0x48ca5d=a0_0x53d91e,_0x2e834e=_0x40d978[_0x48ca5d(0x9d)](':');if(_0x2e834e[_0x48ca5d(0x97)]===0x4){const [_0x1e8499,_0x4e2ce7,_0x5ade96,_0x22a518]=_0x2e834e;return{'username':_0x1e8499,'password':_0x4e2ce7,'host':_0x5ade96,'port':_0x22a518};}else{if(_0x2e834e[_0x48ca5d(0x97)]===0x2){const [_0x2c5772,_0x1f9e2c]=_0x2e834e;return{'host':_0x2c5772,'port':_0x1f9e2c};}else throw new Error(_0x48ca5d(0xd2)+_0x40d978);}}async function getAuth(_0x51adf4,_0xac5892){const _0x1e4240=a0_0x53d91e,_0x560e07={'User-Agent':_0x1e4240(0x124),'sec-ch-ua':_0x1e4240(0x150),'Content-Type':_0x1e4240(0xbb),'sec-ch-ua-mobile':'?0','sec-ch-ua-platform':_0x1e4240(0x14f),'sec-fetch-site':_0x1e4240(0xf2),'sec-fetch-mode':_0x1e4240(0xae),'sec-fetch-dest':_0x1e4240(0x8e),'referer':'https://faucet.plumenetwork.xyz/','accept-language':'en-US,en;q=0.9','pragma':_0x1e4240(0x9b),'origin':_0x1e4240(0xa8)},_0x1257b4=await axios['post'](_0x1e4240(0x138),{'walletAddress':_0x51adf4,'token':_0xac5892},{'headers':_0x560e07});return _0x1257b4['data'];}function a0_0x1558(){const _0x5a7b3e=['0xA4E9ddAD862A1B8b5F8e3d75a3AAd4C158E0faaB','checkIn','\x0a✅\u00a0*Message:*\u00a0\u00a0Claim\x20Faucet\x20GOON\x20Successfully!\x0a🔗\u00a0*Hash:*\u00a0\u00a0\u00a0\u00a0[View\x20Transaction](','.\x20Retrying\x20','application/json','Staking\x20completed\x20for\x20all\x20wallets.','CheckIn\x20and\x20Claiming\x20Nest\x20Staking\x20rewards','Insufficient\x20goonUSD\x20balance\x20for\x20swap.','Please\x20wait\x201\x20hours\x20before\x20continuing\x20to\x20claim\x20faucet\x20ETH','down','50772AdiaCh','function\x20swap()\x20public','INFO','sendTransaction','\x0a\x20\x20🚀\u00a0*Transaction\x20Alert*\u00a0\x0a\x20\x20💎\u00a0*Wallet:*\u00a0\u00a0\u00a0','USD/HKD','logs','0x99c0a0f','\x20sold:\x20','GOON\x20Balance:\x20','random','nonpayable','345339fojEae','CheckIn\x20successful:\x20','310GsWgHB','function','Please\x20try\x20again\x20the\x20next\x20day.','Invalid\x20proxy\x20format:\x20','name',')\x0a\x20\x20','axios','SOL/USDT','bool','Prediction\x20completed\x20for\x20all\x20Wallet.','ethers','Kuma\x20Bond\x20','parse','function\x20createToken(string\x20name,\x20string\x20symbol,\x20string\x20description,\x20uint256\x20rwaType,\x20string\x20image)\x20public','find','balanceOf','sell','function\x20predictPriceMovement(uint256\x20pairIndex,\x20bool\x20isLong)\x20public','CALL_EXCEPTION','Staking\x200.1\x20LAND\x20in\x20LandShare','Faucet\x20GOON\x20completed\x20for\x20all\x20Wallet.','Please\x20try\x20again\x20in\x201\x20hour','success','event\x20Transfer(address\x20indexed\x20from,\x20address\x20indexed\x20to,\x20uint256\x20indexed\x20tokenId)','indexOf','join','Mint\x20and\x20Sell\x20Kuma\x20Bond\x20completed\x20for\x20all\x20wallets.','floor','claim','mintAICK','function\x20deposit(uint256\x20_pid,\x20uint256\x20_amount)\x20public\x20returns\x20(bool)','\x20gnUSD\x20for\x20LAND','deposit','0x5374Cf69C5610950526C668A7B540df6686531b4','substring','same-origin','parseUnits','EUR/USD','0x032139f44650481f4d6000c078820B8E734bF253','../config/wallet','socks-proxy-agent','00000000000000000000000000000000000000000000000000000000000000','BTC/USDT','Insufficient\x20GOON\x20balance\x20for\x20swap.','Swapping\x20','hash','Wallet','httpAgent','exports','http://','https-proxy-agent','USD/JPY','Create\x20Token\x20completed\x20for\x20all\x20Wallet.','\x0a\x20\x20✅\u00a0*Message:*\u00a0\u00a0Stake\x20in\x20Nest\x20Staking\x20Successfully!\x0a\x20\x20🔗\u00a0*Hash:*\u00a0\u00a0\u00a0\u00a0[View\x20Transaction](','../utils/telegram','SUCCESS','\x0a✅\u00a0*Message:*\u00a0\u00a0Stake\x20in\x20LandShare\x20Successfully!\x0a🔗\u00a0*Hash:*\u00a0\u00a0\u00a0\u00a0[View\x20Transaction](','\x0a✅\u00a0*Message:*\u00a0\u00a0Claim\x20Faucet\x20ETH\x20Successfully!\x0a🔗\u00a0*Hash:*\u00a0\u00a0\u00a0\u00a0[View\x20Transaction](','wait','Mint\x20successful:\x20https://testnet-explorer.plumenetwork.xyz/tx/','LAND\x20Balance:\x20','Staking\x20','\x0a✅\u00a0*Message:*\u00a0\u00a0CheckIn\x20Successfully!\x0a🔗\u00a0*Hash:*\u00a0\u00a0\u00a0\u00a0[View\x20Transaction](','Signature\x20is\x20already\x20used','Proxy\x20is\x20connected!','uint256','Error\x20processing\x20wallet:\x20','function\x20checkIn()\x20public','Stake\x20Failed!','GOON','utf-8','\x20created.','toFixed','\x0a🚨\u00a0*Error\x20Alert*\u00a0\x0a💎\u00a0*Wallet:*\u00a0\u00a0\u00a0','Transaction\x20error,\x20Please\x20try\x20again','Wallet\x20address:\x20','Wait\x20for\x20cooldown','\x20goonUSD\x20in\x20Nest\x20Staking','Critical\x20error:\x20','Approve\x20Failed!','rwaType','ARB/USDT','../utils/logger','0xd806259C3389Da7921316fb5489490EA5E2f88C6','337260eKIiVx','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/127.0.0.0\x20Safari/537.36','toString','predictPriceMovement','TIA/USDT','DEBUG','Swap\x20completed\x20for\x20all\x20Wallet.','20gnaHlS','Invalid\x20admin\x20signature','Insufficient\x20LAND\x20balance\x20for\x20staking.','0x485D972889Ee8fd0512403E32eE94dE5c7a5DC7b','createToken','httpsAgent','0x5c1409a46cd113b3a667db6df0a8d7be37ed3bb3','0xba22114ec75f0d55c34a5e5a3cf384484ad9e733','approve','Stake\x20gnUSD\x20successful:\x20','items','2031554ddONHR','../config/proxy.txt','Transaction\x20error:\x20','https://faucet.plumenetwork.xyz/api/faucet','2675544oUiEji','Faucet\x20ETH\x20completed\x20for\x20all\x20Wallet.','ERROR','stake','for','topics','function\x20approve(address\x20spender,\x20uint256\x20amount)\x20public\x20returns\x20(bool)','trim','\x20in\x202\x20seconds...','Swap\x20and\x20Stake\x20in\x20Landshare\x20completed\x20for\x20all\x20Wallet.','now','toBigInt','includes','https://testnet-explorer.plumenetwork.xyz/tx/','ONDO/USDT','ETH','Swap\x20to\x20LAND\x20successful:\x20','Please\x20try\x20again\x20in\x201\x20hours.','Retrying\x20','message','utf8','Insufficient\x20goonUSD\x20balance\x20for\x20staking.','\x22Windows\x22','\x22Not)A;Brand\x22;v=\x2299\x22,\x20\x22Google\x20Chrome\x22;v=\x22127\x22,\x20\x22Chromium\x22;v=\x22127\x22','Token\x20ID:\x20','26LzPqma','execution\x20reverted:\x20\x22TF\x22','Contract','address','0x103fc4520000000000000000000000000000000000000000000000000000000000000060','empty','readFileSync','\x20LAND','Asset\x20tokenized\x20','551280uWoyOJ','\x0a🛑\u00a0*Status:*\u00a0','status','Please\x20try\x20again\x20in\x202\x20hours.','Error\x20calling\x20predictPriceMovement\x20after\x20','length','Check-in\x20completed\x20for\x20all\x20wallets.','USD/SGD','balance','no-cache','00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000004474f4f4e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041','split','Transaction\x20successful:\x20','ETH/USDT','Failed\x20to\x20claim\x20faucet\x20for\x20wallet\x20!!!','Error:\x20','defaults','\x0a🚀\u00a0*Transaction\x20Alert*\u00a0\x0a💎\u00a0*Wallet:*\u00a0\u00a0\u00a0','@crocswap-libs/sdk','_owner','gnUSD\x20Balance:\x20','0x8504a242d86C7D84Fd11E564e6291f0A20d6C2a2','https://faucet.plumenetwork.xyz','320424MvvCkk','Transaction\x20successful:\x20https://testnet-explorer.plumenetwork.xyz/tx/','Error\x20calling\x20createToken:\x20','\x20GOON\x20for\x20goonUSD','goonUSD\x20Balance:\x20','cors','NEST\x20balance:\x20','description','Reward\x20staking\x20has\x20been\x20claimed:\x20https://testnet-explorer.plumenetwork.xyz/tx/','00000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000345544800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000041','function\x20sellBond(uint256\x20tokenId)\x20public','Insufficient\x20balance!','swap','0x45934E0253955dE498320D67c0346793be44BEC0'];a0_0x1558=function(){return _0x5a7b3e;};return a0_0x1558();}async function getTokenBalance(_0x8e75f1,_0x35c1c9){const _0x301165=a0_0x53d91e,_0x3550e6=new ethers[(_0x301165(0x154))](_0x35c1c9,ERC20_ABI,_0x8e75f1),_0x5c25df=await _0x3550e6[_0x301165(0xde)](_0x8e75f1['address']);return ethers['formatUnits'](_0x5c25df,0x12);}function handleError(_0xec2f58,_0x2f5766,_0x21f9f1,_0x4faa82){const _0x2bc003=a0_0x53d91e;_0x2f5766<_0x21f9f1?(log('ERROR',_0x2bc003(0xa1)+_0xec2f58[_0x2bc003(0x14c)]+_0x2bc003(0xba)+(_0x2f5766+0x1)+'/'+_0x21f9f1+'\x20in\x202\x20seconds...'),setTimeout(_0x4faa82,0x7d0)):log(_0x2bc003(0x13b),_0x2bc003(0x11d)+_0xec2f58[_0x2bc003(0x14c)]);}async function callCheckInForKey(_0x1461a6){const _0x479c94=a0_0x53d91e,_0x479e74=[_0x479c94(0x112)],_0x5a09d6='0x8Dc5b3f1CcC75604710d9F464e3C5D2dfCAb60d8',_0x32282d=createWallet(_0x1461a6,provider),_0x41585d=new ethers[(_0x479c94(0x154))](_0x5a09d6,_0x479e74,_0x32282d);try{const _0x16ec68=getAddress(_0x1461a6,provider);log(_0x479c94(0x128),_0x479c94(0x11a)+_0x16ec68);const _0x45cd61=new ethers[(_0x479c94(0x154))](contract_stake,stakeABI,_0x32282d);log(_0x479c94(0xc3),_0x479c94(0xbd));const _0x5a5c17=await _0x45cd61[_0x479c94(0xeb)](),_0x494028=await _0x5a5c17[_0x479c94(0x109)]();log(_0x479c94(0x106),_0x479c94(0xb1)+_0x494028[_0x479c94(0xfc)]);const _0x115f71=await getTokenBalance(_0x32282d,contract_nest);log('DEBUG',_0x479c94(0xaf)+_0x115f71);const _0xea6a9f=await _0x41585d[_0x479c94(0xb8)](),_0xb2c918=await _0xea6a9f[_0x479c94(0x109)](),_0x4ac059=_0x479c94(0x146)+_0xb2c918['hash'];log(_0x479c94(0x106),_0x479c94(0xce)+_0x4ac059);const _0x34369c='\x0a🚀\u00a0*Transaction\x20Alert*\u00a0\x0a💎\u00a0*Wallet:*\u00a0\u00a0\u00a0'+_0x32282d[_0x479c94(0x8c)]+_0x479c94(0x10d)+_0x4ac059+')\x0a';await sendTelegramMessage(_0x34369c);}catch(_0x2b9999){_0x2b9999[_0x479c94(0x14c)]['includes']('execution\x20reverted')?log('ERROR',_0x479c94(0xd1)):log('ERROR','Error\x20calling\x20checkIn:\x20'+_0x2b9999['message']);}}async function checkIn(){const _0x23f59c=a0_0x53d91e;for(const _0x4940bf of PRIVATE_KEYS){await callCheckInForKey(_0x4940bf),await delay(0x7d0);}log(_0x23f59c(0xc3),_0x23f59c(0x98));}async function claimFaucetETH(_0x481fab,_0x2b4307){const _0x4e1ff2=a0_0x53d91e;try{const _0x36bf75=getAddress(_0x481fab,provider);log(_0x4e1ff2(0x128),_0x4e1ff2(0x11a)+_0x36bf75),log(_0x4e1ff2(0xc3),'Requesting\x20ETH\x20tokens\x20from\x20the\x20faucet...');const {host:_0x22a56e,port:_0x39f33b,username:_0x2f4ef0,password:_0x2b397d}=parseProxy(_0x2b4307),_0x35ce9c=_0x4e1ff2(0x100)+_0x2f4ef0+':'+_0x2b397d+'@'+_0x22a56e+':'+_0x39f33b,_0x21b2bb=new HttpsProxyAgent(_0x35ce9c);axios[_0x4e1ff2(0xa2)][_0x4e1ff2(0xfe)]=_0x21b2bb,axios[_0x4e1ff2(0xa2)][_0x4e1ff2(0x12f)]=_0x21b2bb,log(_0x4e1ff2(0x128),_0x4e1ff2(0x10f));const {salt:_0x22ff12,signature:_0x2d7e9c}=await getAuth(_0x36bf75,_0x4e1ff2(0x148)),_0x54a8be=createWallet(_0x481fab,provider),_0x2cedd6=_0x4e1ff2(0x8d)+_0x22ff12[_0x4e1ff2(0xf1)](0x2)+_0x4e1ff2(0xb2)+_0x2d7e9c[_0x4e1ff2(0xf1)](0x2)+_0x4e1ff2(0xf8),_0x23627f={'data':_0x2cedd6,'to':CONTRACT_ADDRESS,'value':0x0},_0x1ebef4=await _0x54a8be[_0x4e1ff2(0xc4)](_0x23627f);await _0x1ebef4[_0x4e1ff2(0x109)]();const _0x1b21e5=_0x4e1ff2(0x146)+_0x1ebef4[_0x4e1ff2(0xfc)];log(_0x4e1ff2(0x106),_0x4e1ff2(0x9e)+_0x1b21e5);const _0xde03e9=_0x4e1ff2(0xa3)+_0x54a8be[_0x4e1ff2(0x8c)]+_0x4e1ff2(0x108)+_0x1b21e5+')\x0a';await sendTelegramMessage(_0xde03e9);}catch(_0x1383dc){const _0x1bd6ff=createWallet(_0x481fab,provider),_0x545b7e=_0x1bd6ff[_0x4e1ff2(0x8c)];let _0x1b6555=_0x4e1ff2(0x118)+_0x545b7e+_0x4e1ff2(0x93);_0x1383dc['message'][_0x4e1ff2(0x145)]('Invalid\x20admin\x20signature')||_0x1383dc[_0x4e1ff2(0x14c)][_0x4e1ff2(0x145)](_0x4e1ff2(0x10e))?(log(_0x4e1ff2(0x13b),_0x4e1ff2(0x14a)),_0x1b6555+=_0x4e1ff2(0x14a)):(log(_0x4e1ff2(0x13b),_0x4e1ff2(0xa0)),_0x1b6555+=_0x4e1ff2(0xa0)),await sendTelegramMessage(_0x1b6555);}}async function faucetETH(){const _0x166275=a0_0x53d91e;for(let _0x42695f=0x0;_0x42695f<PRIVATE_KEYS['length'];_0x42695f++){const _0x210f1e=PRIVATE_KEYS[_0x42695f],_0x20c5cf=proxies[_0x42695f%proxies['length']];await claimFaucetETH(_0x210f1e,_0x20c5cf),await delay(0x7d0);}log(_0x166275(0xc3),_0x166275(0x13a));}function a0_0x3e42(_0x462fc1,_0x9398c5){const _0x155891=a0_0x1558();return a0_0x3e42=function(_0x3e42fe,_0x1f3b81){_0x3e42fe=_0x3e42fe-0x8c;let _0x4902fd=_0x155891[_0x3e42fe];return _0x4902fd;},a0_0x3e42(_0x462fc1,_0x9398c5);}async function claimFaucetGOON(_0x372f26,_0x54b2ab){const _0x4dc03f=a0_0x53d91e;try{const _0x40dcc8=getAddress(_0x372f26,provider);log(_0x4dc03f(0x128),_0x4dc03f(0x11a)+_0x40dcc8),log(_0x4dc03f(0xc3),'Requesting\x20GOON\x20tokens\x20from\x20the\x20faucet...');const {host:_0x1b4d3f,port:_0x321177,username:_0x4a00ea,password:_0x3a84df}=parseProxy(_0x54b2ab),_0x4c3164=_0x4dc03f(0x100)+_0x4a00ea+':'+_0x3a84df+'@'+_0x1b4d3f+':'+_0x321177,_0x2c4b90=new HttpsProxyAgent(_0x4c3164);axios[_0x4dc03f(0xa2)][_0x4dc03f(0xfe)]=_0x2c4b90,axios[_0x4dc03f(0xa2)][_0x4dc03f(0x12f)]=_0x2c4b90,log(_0x4dc03f(0x128),'Proxy\x20is\x20connected!');const {salt:_0x11f36b,signature:_0x3caba8}=await getAuth(_0x40dcc8,_0x4dc03f(0x114)),_0x18be60=createWallet(_0x372f26,provider),_0x2147d3=_0x4dc03f(0x8d)+_0x11f36b['substring'](0x2)+_0x4dc03f(0x9c)+_0x3caba8['substring'](0x2)+'00000000000000000000000000000000000000000000000000000000000000',_0x495e0c={'data':_0x2147d3,'to':CONTRACT_ADDRESS,'value':0x0},_0x566064=await _0x18be60[_0x4dc03f(0xc4)](_0x495e0c);await _0x566064['wait']();const _0x38ace1=_0x4dc03f(0x146)+_0x566064['hash'];log(_0x4dc03f(0x106),_0x4dc03f(0x9e)+_0x38ace1);const _0x12674c='\x0a🚀\u00a0*Transaction\x20Alert*\u00a0\x0a💎\u00a0*Wallet:*\u00a0\u00a0\u00a0'+_0x18be60[_0x4dc03f(0x8c)]+_0x4dc03f(0xb9)+_0x38ace1+')\x0a';await sendTelegramMessage(_0x12674c);}catch(_0x56f3f6){const _0x2b4ddd=createWallet(_0x372f26,provider),_0x50528c=_0x2b4ddd[_0x4dc03f(0x8c)];let _0x19c7a9=_0x4dc03f(0x118)+_0x50528c+_0x4dc03f(0x93);_0x56f3f6[_0x4dc03f(0x14c)][_0x4dc03f(0x145)](_0x4dc03f(0x12b))||_0x56f3f6[_0x4dc03f(0x14c)][_0x4dc03f(0x145)]('Signature\x20is\x20already\x20used')?(log(_0x4dc03f(0x13b),'Please\x20try\x20again\x20in\x202\x20hours.'),_0x19c7a9+=_0x4dc03f(0x95)):(log('ERROR',_0x4dc03f(0xa0)),_0x19c7a9+=_0x4dc03f(0xa0)),await sendTelegramMessage(_0x19c7a9);}}async function faucetGOON(){const _0x50b7b5=a0_0x53d91e;for(let _0x36e2a7=0x0;_0x36e2a7<PRIVATE_KEYS[_0x50b7b5(0x97)];_0x36e2a7++){const _0x3ae711=PRIVATE_KEYS[_0x36e2a7],_0x46fbcd=proxies[_0x36e2a7%proxies[_0x50b7b5(0x97)]];await claimFaucetGOON(_0x3ae711,_0x46fbcd),await delay(0x7d0);}log(_0x50b7b5(0xc3),_0x50b7b5(0xe3));}async function performSwapForKey(_0x6ee720){const _0x33bf20=a0_0x53d91e;try{const _0x4e615e=createWallet(_0x6ee720,provider),_0x468ca9=_0x4e615e[_0x33bf20(0x8c)];log('DEBUG',_0x33bf20(0x11a)+_0x468ca9);const _0x264791=await getTokenBalance(_0x4e615e,contract_goon);log(_0x33bf20(0x128),_0x33bf20(0xca)+_0x264791);const _0xa7bd61=new CrocEnv(_0x33bf20(0xc8),_0x4e615e),_0x4c7e44='0x4c722A53Cf9EB5373c655E1dD2dA95AcC10152D1',_0x81396a=_0x33bf20(0x130),_0x32ad1a=_0x33bf20(0x131),_0x4bccb4=getRandomValue(parseFloat(MIN_SWAP),parseFloat(MAX_SWAP));log(_0x33bf20(0xc3),'Swapping\x20'+_0x4bccb4+_0x33bf20(0xac)),await approveToken(_0x32ad1a,_0x4c7e44,_0x4bccb4,_0x4e615e);const _0x146f21=await _0xa7bd61[_0x33bf20(0xdf)](_0x32ad1a,ethers[_0x33bf20(0xf3)](_0x4bccb4[_0x33bf20(0x125)](),0x12))[_0x33bf20(0x13d)](_0x81396a)[_0x33bf20(0xb5)](),_0x42f77e=_0x33bf20(0x146)+_0x146f21[_0x33bf20(0xfc)];log(_0x33bf20(0x106),_0x33bf20(0x9e)+_0x42f77e);const _0x36dd14='\x0a🚀\u00a0*Transaction\x20Alert*\u00a0\x0a💎\u00a0*Wallet:*\u00a0\u00a0\u00a0'+_0x4e615e[_0x33bf20(0x8c)]+'\x0a✅\u00a0*Message:*\u00a0\u00a0Swap\x20GOON\x20to\x20gnUSD\x20Successfully!\x0a🔗\u00a0*Hash:*\u00a0\u00a0\u00a0\u00a0[View\x20Transaction]('+_0x42f77e+')\x0a';await sendTelegramMessage(_0x36dd14);}catch(_0x5e3c7e){const _0x3f726b=createWallet(_0x6ee720,provider),_0x2a9dd6=_0x3f726b[_0x33bf20(0x8c)];let _0x573cf2=_0x33bf20(0x118)+_0x2a9dd6+'\x0a🛑\u00a0*Status:*\u00a0\u00a0\x0a\x20\x20\x20\x20';_0x5e3c7e[_0x33bf20(0x14c)]['includes'](_0x33bf20(0x153))?(log(_0x33bf20(0x13b),'Insufficient\x20GOON\x20balance\x20for\x20swap.'),_0x573cf2+=_0x33bf20(0xfa)):(log('ERROR',_0x33bf20(0x137)+_0x5e3c7e['message'],_0x5e3c7e),_0x573cf2+=_0x33bf20(0x119)),await sendTelegramMessage(_0x573cf2);}}async function swapTokens(){const _0x1c13f5=a0_0x53d91e;for(const _0x230dc8 of PRIVATE_KEYS){await performSwapForKey(_0x230dc8),await delay(0x3e8);}log(_0x1c13f5(0xc3),_0x1c13f5(0x129));}async function stakeLandshare(_0x425a6a){const _0xd2f6cd=a0_0x53d91e;try{const _0x13e985=createWallet(_0x425a6a,provider),_0x1858cd=_0x13e985[_0xd2f6cd(0x8c)];log(_0xd2f6cd(0x128),_0xd2f6cd(0x11a)+_0x1858cd);const _0x3fab3c=await getTokenBalance(_0x13e985,contract_goonusd);log(_0xd2f6cd(0x128),_0xd2f6cd(0xa6)+_0x3fab3c+'\x20gnUSD');if(parseFloat(_0x3fab3c)<=0x0){log(_0xd2f6cd(0x13b),_0xd2f6cd(0xbe));return;}const _0x1bc838=0.1,_0x19386b=[_0xd2f6cd(0xc2)],_0x5c8b66='0xd2AadE12760d5e176F93C8F1C6Ae10667c8FCa8b',_0x4be965=_0xd2f6cd(0x130),_0x2dbcd7=_0xd2f6cd(0xb6);log('INFO',_0xd2f6cd(0xfb)+_0x1bc838+_0xd2f6cd(0xee)),await approveToken(_0x4be965,_0x5c8b66,_0x1bc838,_0x13e985);const _0x1dec47=new ethers[(_0xd2f6cd(0x154))](_0x5c8b66,_0x19386b,_0x13e985),_0x439c6c=await _0x1dec47[_0xd2f6cd(0xb5)](),_0x1d7e3b=await _0x439c6c[_0xd2f6cd(0x109)](),_0x5619dd=_0xd2f6cd(0x146)+_0x1d7e3b[_0xd2f6cd(0xfc)];log(_0xd2f6cd(0x106),_0xd2f6cd(0x149)+_0x5619dd);const _0x15b3a3=await getTokenBalance(_0x13e985,contract_land);log(_0xd2f6cd(0x128),_0xd2f6cd(0x10b)+_0x15b3a3+_0xd2f6cd(0x90));if(parseFloat(_0x15b3a3)<=0x0){log('ERROR',_0xd2f6cd(0x12c));return;}const _0x2714ce=ethers[_0xd2f6cd(0xf3)]('0.1',0x12);await approveToken(_0x2dbcd7,contract_stakeLAND,_0x2714ce,_0x13e985),log(_0xd2f6cd(0xc3),_0xd2f6cd(0xe2));const _0x1fb665=[_0xd2f6cd(0xed)],_0x18d9f0=new ethers[(_0xd2f6cd(0x154))](contract_stakeLAND,_0x1fb665,_0x13e985),_0x553607=await _0x18d9f0[_0xd2f6cd(0xef)](0x0,_0x2714ce),_0x53b969='https://testnet-explorer.plumenetwork.xyz/tx/'+_0x553607['hash'];log(_0xd2f6cd(0x106),'Stake\x20LAND\x20successful:\x20'+_0x53b969);const _0x5d0ed9=_0xd2f6cd(0xa3)+_0x13e985[_0xd2f6cd(0x8c)]+_0xd2f6cd(0x107)+_0x53b969+')\x0a';await sendTelegramMessage(_0x5d0ed9);}catch(_0x16d24e){_0x16d24e[_0xd2f6cd(0x14c)][_0xd2f6cd(0x145)](_0xd2f6cd(0x153))?log('ERROR',_0xd2f6cd(0xbe)):log(_0xd2f6cd(0x13b),_0xd2f6cd(0x137)+_0x16d24e[_0xd2f6cd(0x14c)],_0x16d24e);}}async function LandShare(){const _0x3119ac=a0_0x53d91e;for(const _0x3b2d1c of PRIVATE_KEYS){await stakeLandshare(_0x3b2d1c),await delay(0x3e8);}log('INFO',_0x3119ac(0x142));}async function stakeTokens(_0x540804){const _0xea076e=a0_0x53d91e;try{const _0xad06c2=createWallet(_0x540804,provider),_0x32c499=_0xad06c2['address'];log('DEBUG',_0xea076e(0x11a)+_0x32c499);const _0x3ac641=await getTokenBalance(_0xad06c2,contract_goonusd);log(_0xea076e(0x128),_0xea076e(0xad)+_0x3ac641);if(parseFloat(_0x3ac641)<=0x0){log('ERROR',_0xea076e(0x14e));return;}const _0x331c6b=new ethers[(_0xea076e(0x154))](contract_goonusd,ERC20_ABI,_0xad06c2),_0x7da9ea=ethers[_0xea076e(0xf3)](_0x3ac641['toString'](),0x12),_0x1ba772=await _0x331c6b[_0xea076e(0x132)](contract_stake,_0x7da9ea),_0x4008b4=await _0x1ba772['wait']();if(_0x4008b4[_0xea076e(0x94)]!==0x1){log(_0xea076e(0x13b),_0xea076e(0x11e));return;}log(_0xea076e(0xc3),_0xea076e(0x10c)+_0x3ac641+_0xea076e(0x11c));const _0x25aff6=new ethers[(_0xea076e(0x154))](contract_stake,stakeABI,_0xad06c2),_0x741928=await _0x25aff6['stake'](_0x7da9ea),_0x2e011e=await _0x741928['wait']();if(_0x2e011e[_0xea076e(0x94)]!==0x1){log('ERROR',_0xea076e(0x113));return;}const _0x3e1df4=_0xea076e(0x146)+_0x2e011e[_0xea076e(0xfc)];log(_0xea076e(0x106),_0xea076e(0x133)+_0x3e1df4);const _0xa10426=_0xea076e(0xc5)+_0xad06c2[_0xea076e(0x8c)]+_0xea076e(0x104)+_0x3e1df4+_0xea076e(0xd4);await sendTelegramMessage(_0xa10426);}catch(_0x492841){_0x492841[_0xea076e(0x14c)][_0xea076e(0x145)](_0xea076e(0xe1))?log(_0xea076e(0x13b),_0xea076e(0xb4)):log(_0xea076e(0x13b),_0xea076e(0x137)+_0x492841['message'],_0x492841);}}async function stake(){const _0x557083=a0_0x53d91e;for(const _0x175db8 of PRIVATE_KEYS){await stakeTokens(_0x175db8),await delay(0x7d0);}log('INFO',_0x557083(0xbc));}const contractKUMAMint=a0_0x53d91e(0xa7),contractKUMABonds='0x763Ccc2Cb06Eb8932208C5714ff5c010894Ac98d',contractSell=a0_0x53d91e(0xb7),abiKUMAMint=['function\x20mintAICK()\x20public',a0_0x53d91e(0xe6)],abiKUMABonds=['function\x20approve(address\x20to,\x20uint256\x20tokenId)\x20public'],abiSell=[a0_0x53d91e(0xb3)];async function mintApproveSellNFT(_0x3ac7bd){const _0x4f7bdc=a0_0x53d91e;try{const _0x333250=new ethers[(_0x4f7bdc(0x154))](contractKUMAMint,abiKUMAMint,_0x3ac7bd),_0x227bb5=new ethers['Contract'](contractKUMABonds,abiKUMABonds,_0x3ac7bd),_0x21f5af=new ethers[(_0x4f7bdc(0x154))](contractSell,abiSell,_0x3ac7bd),_0x5b3939=await _0x333250[_0x4f7bdc(0xec)](),_0x130177=await _0x5b3939[_0x4f7bdc(0x109)](),_0x4c4bed=_0x130177[_0x4f7bdc(0xc7)][_0x4f7bdc(0xdd)](_0x59d813=>_0x59d813[_0x4f7bdc(0x13e)][0x0]==='0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef');if(_0x4c4bed){const _0x4dfdcc=_0x4c4bed['topics'][0x3],_0x2041a7=ethers[_0x4f7bdc(0x144)](_0x4dfdcc)['toString']();log(_0x4f7bdc(0x106),_0x4f7bdc(0x10a)+_0x130177['hash']),log('INFO',_0x4f7bdc(0x151)+_0x2041a7);const _0x52f475=await _0x227bb5['approve'](contractSell,_0x2041a7);await _0x52f475[_0x4f7bdc(0x109)]();const _0x5c78f8=await _0x21f5af['sellBond'](_0x2041a7);await _0x5c78f8['wait']();const _0x1dac12=_0x4f7bdc(0x146)+_0x5c78f8[_0x4f7bdc(0xfc)];log(_0x4f7bdc(0x106),_0x4f7bdc(0xda)+_0x2041a7+_0x4f7bdc(0xc9)+_0x1dac12);const _0x201a01=_0x4f7bdc(0xc5)+_0x3ac7bd['address']+'\x0a\x20\x20✅\u00a0*Message:*\u00a0\u00a0Mint\x20&\x20Sell\x20KumaBond\x20Successfully!\x0a\x20\x20🔗\u00a0*Hash:*\u00a0\u00a0\u00a0\u00a0[View\x20Transaction]('+_0x1dac12+_0x4f7bdc(0xd4);await sendTelegramMessage(_0x201a01);}else log(_0x4f7bdc(0x13b),'Transfer\x20event\x20not\x20found\x20in\x20logs');}catch(_0x398ffd){_0x398ffd[_0x4f7bdc(0x14c)]['includes']('execution\x20reverted:\x20\x22Wallet\x20already\x20minted\x22')?log('ERROR','Wallet\x20already\x20minted.\x20'):log(_0x4f7bdc(0x13b),_0x4f7bdc(0x111)+_0x398ffd[_0x4f7bdc(0x14c)]);}}async function kumaBond(_0x3ac17f){const _0x5bbd6f=a0_0x53d91e;try{const _0xe7107b=new ethers[(_0x5bbd6f(0xfd))](_0x3ac17f,provider),_0x2d761a=_0xe7107b[_0x5bbd6f(0x8c)];log(_0x5bbd6f(0x128),'Wallet\x20address:\x20'+_0x2d761a),await mintApproveSellNFT(_0xe7107b);}catch(_0x214d89){log(_0x5bbd6f(0x13b),_0x5bbd6f(0x137)+_0x214d89[_0x5bbd6f(0x14c)]);}}async function KumaBond(){const _0x2cf8ee=a0_0x53d91e;for(const _0xc89809 of PRIVATE_KEYS){await kumaBond(_0xc89809),await delay(0x3e8);}log('INFO',_0x2cf8ee(0xe9));}const pairs={0x0:a0_0x53d91e(0x9f),0x1:a0_0x53d91e(0xf9),0x2:a0_0x53d91e(0x120),0x3:a0_0x53d91e(0xf4),0x4:a0_0x53d91e(0x102),0x5:'GBP/USD',0x6:a0_0x53d91e(0xd6),0x7:a0_0x53d91e(0xc6),0x8:a0_0x53d91e(0x127),0x9:'USD/VND',0xa:'MKR/USDT',0xb:a0_0x53d91e(0x99),0xc:a0_0x53d91e(0x147),0xd:'USD/INR'};function getRandomInt(_0x3dbb97,_0x28e0bd){const _0x475597=a0_0x53d91e;return Math['floor'](Math[_0x475597(0xcb)]()*(_0x28e0bd-_0x3dbb97+0x1))+_0x3dbb97;}function getRandomBool(){const _0x2e6e29=a0_0x53d91e;return Math[_0x2e6e29(0xcb)]()<0.13;}function getPredictionMessage(_0x3d3955,_0x2e0e43){const _0x3d5c96=a0_0x53d91e,_0x2e42b9=pairs[_0x3d3955],_0x135c23=_0x2e0e43?'up':_0x3d5c96(0xc0);return _0x2e42b9+'\x20is\x20predicted\x20to\x20'+_0x135c23+'\x20in\x20the\x20next\x201\x20hour.';}async function callPredictPriceMovement(_0xc220b4,_0x3d4294,_0x5435c8,_0xd06414=0x0,_0x78b9ae=0x3){const _0xe3529f=a0_0x53d91e;try{const _0x464de4=createWallet(_0xc220b4,provider),_0x5b0ee9=_0x464de4['address'];log(_0xe3529f(0x128),_0xe3529f(0x11a)+_0x5b0ee9);const _0x424306=new ethers[(_0xe3529f(0x154))](_0xe3529f(0xf5),[_0xe3529f(0xe0)],_0x464de4);try{const _0xe36d51=await _0x424306[_0xe3529f(0x126)](_0x3d4294,_0x5435c8),_0x3d5e99=getPredictionMessage(_0x3d4294,_0x5435c8);log(_0xe3529f(0xc3),_0x3d5e99);const _0x36758d=await _0xe36d51['wait']();log('SUCCESS',_0xe3529f(0xaa)+_0x36758d[_0xe3529f(0xfc)]);}catch(_0x798982){_0x798982['message'][_0xe3529f(0x145)](_0xe3529f(0x11b))?log(_0xe3529f(0x13b),_0xe3529f(0xe4)):_0xd06414<_0x78b9ae?(log(_0xe3529f(0x13b),_0xe3529f(0x14b)+(_0xd06414+0x1)+'/'+_0x78b9ae+_0xe3529f(0x141)),await delay(0x7d0),await callPredictPriceMovement(_0xc220b4,_0x3d4294,_0x5435c8,_0xd06414+0x1,_0x78b9ae)):log(_0xe3529f(0x13b),_0xe3529f(0x96)+_0x78b9ae+'\x20attempts:\x20'+_0x798982[_0xe3529f(0x14c)]);}}catch(_0xbbd5b){log('ERROR',_0xe3529f(0x11d)+_0xbbd5b[_0xe3529f(0x14c)]);}}async function predict(){const _0x8f5bb9=a0_0x53d91e;for(const _0x389351 of PRIVATE_KEYS){const _0x4b0ca8=getRandomInt(0x0,0xd),_0x369948=getRandomBool();await callPredictPriceMovement(_0x389351,_0x4b0ca8,_0x369948),await delay(0x7d0);}log('INFO',_0x8f5bb9(0xd8));}function getRandomData(){const _0x4fce04=a0_0x53d91e,_0x534057=path[_0x4fce04(0xe8)](__dirname,'../config/datarwa.json'),_0x2ead19=JSON[_0x4fce04(0xdb)](fs[_0x4fce04(0x8f)](_0x534057,_0x4fce04(0x14d)))[_0x4fce04(0x134)],_0x421cae=Math[_0x4fce04(0xea)](Math[_0x4fce04(0xcb)]()*_0x2ead19[_0x4fce04(0x97)]);return _0x2ead19[_0x421cae];}async function callCreateTokenForKey(_0x171ad3){const _0x1fe315=a0_0x53d91e;try{const _0xf4d0b4=createWallet(_0x171ad3,provider),_0x492f3d=_0xf4d0b4[_0x1fe315(0x8c)];log(_0x1fe315(0x128),_0x1fe315(0x11a)+_0x492f3d);const _0x365e12=new ethers[(_0x1fe315(0x154))](_0x1fe315(0x12d),[_0x1fe315(0xdc)],_0xf4d0b4),_0x16ba9e=getRandomData(),_0x4f34d2=_0x16ba9e[_0x1fe315(0xd3)],_0x380291='ITEM',_0x12b355=_0x16ba9e[_0x1fe315(0xb0)],_0x53601c=_0x16ba9e[_0x1fe315(0x11f)],_0x1c77f5=_0x16ba9e['image'];try{const _0x4b144b=await _0x365e12[_0x1fe315(0x12e)](_0x4f34d2,_0x380291,_0x12b355,_0x53601c,_0x1c77f5);log(_0x1fe315(0x106),_0x1fe315(0xaa)+_0x4b144b[_0x1fe315(0xfc)]),await _0x4b144b[_0x1fe315(0x109)](),log(_0x1fe315(0x106),_0x1fe315(0x91)+_0x4f34d2+_0x1fe315(0x116));}catch(_0x9b01f2){log(_0x1fe315(0x13b),_0x1fe315(0xab)+_0x9b01f2[_0x1fe315(0x14c)]);}}catch(_0x255946){log(_0x1fe315(0x13b),'Critical\x20error:\x20'+_0x255946[_0x1fe315(0x14c)]);}}async function createToken(){const _0x358409=a0_0x53d91e;for(const _0x13f059 of PRIVATE_KEYS){await callCreateTokenForKey(_0x13f059),await delay(0x7d0);}log(_0x358409(0xc3),_0x358409(0x103));}let lastCheckInTime=0x0;async function runAllTasks(){const _0x4d452e=a0_0x53d91e;while(!![]){const _0x52eaa1=Date[_0x4d452e(0x143)](),_0x5452be=0x18*0x3c*0x3c*0x3e8;if(_0x52eaa1-lastCheckInTime>=_0x5452be){for(const _0x134b84 of PRIVATE_KEYS){await callCheckInForKey(_0x134b84),await delay(0x7d0),await callCreateTokenForKey(_0x134b84),await delay(0x7d0),await stakeLandshare(_0x134b84),await delay(0x7d0);}lastCheckInTime=_0x52eaa1;}for(const _0xb587bb of PRIVATE_KEYS){const _0x105875=proxies[PRIVATE_KEYS[_0x4d452e(0xe7)](_0xb587bb)%proxies[_0x4d452e(0x97)]];await claimFaucetGOON(_0xb587bb,_0x105875),await delay(0x7d0),await performSwapForKey(_0xb587bb),await delay(0x7d0),await stakeTokens(_0xb587bb),await delay(0x7d0);const _0x3591ad=getRandomInt(0x0,0x5),_0x5ac846=getRandomBool();await callPredictPriceMovement(_0xb587bb,_0x3591ad,_0x5ac846),await delay(0x7d0);}log(_0x4d452e(0xc3),_0x4d452e(0xbf)),await delay(0x3e8*0x3c*0x3c);for(const _0x47ea62 of PRIVATE_KEYS){const _0x15d6c5=proxies[PRIVATE_KEYS['indexOf'](_0x47ea62)%proxies[_0x4d452e(0x97)]];await claimFaucetETH(_0x47ea62,_0x15d6c5),await delay(0x7d0);const _0x4b8898=getRandomInt(0x0,0x5),_0x39717e=getRandomBool();await callPredictPriceMovement(_0x47ea62,_0x4b8898,_0x39717e),await delay(0x7d0);}log(_0x4d452e(0xc3),'All\x20tasks\x20completed\x20for\x20all\x20Wallets.\x20Waiting\x20for\x201\x20hours\x20before\x20starting\x20over.'),await delay(0x3e8*0x3c*0x3c);}}function getRandomValue(_0x3163dc,_0x40e6ef){const _0x275f82=a0_0x53d91e;return(Math['random']()*(_0x40e6ef-_0x3163dc)+_0x3163dc)[_0x275f82(0x117)](0x4);}async function approveToken(_0x1892ce,_0x29e2c2,_0x29328c,_0x3d2be2){const _0x20802c=a0_0x53d91e,_0x1feb1b=new ethers['Contract'](_0x1892ce,[_0x20802c(0x13f)],_0x3d2be2);try{const _0x2ace48=await _0x1feb1b[_0x20802c(0x132)](_0x29e2c2,ethers[_0x20802c(0xf3)](_0x29328c[_0x20802c(0x125)](),0x12));await _0x2ace48[_0x20802c(0x109)]();}catch(_0x1afddc){log(_0x20802c(0x13b),'Approval\x20error:\x20'+_0x1afddc['message'],_0x1afddc);throw _0x1afddc;}}module[a0_0x53d91e(0xff)]={'checkIn':checkIn,'faucetETH':faucetETH,'faucetGOON':faucetGOON,'swapTokens':swapTokens,'LandShare':LandShare,'stake':stake,'predict':predict,'KumaBond':KumaBond,'createToken':createToken,'runAllTasks':runAllTasks};