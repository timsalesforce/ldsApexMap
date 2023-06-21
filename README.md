# JS Maps do not serialize to the network

If you use an AuraEnabled Apex method in your LWC, and you attempt to pass a JS Map object to it, it will not get serialized to the network.

1. Clone this repository
2. Deploy to a scratch org (might have to use --forceoverwrite)
3. Create an Account
4. Observe the component on the Account record page has NONE for both Map() usages.

Using a plain JS object instead works just fine.

