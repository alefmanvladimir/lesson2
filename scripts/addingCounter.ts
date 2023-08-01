import { toNano } from 'ton-core';
import { FirstContract } from '../wrappers/FirstContract';
import { NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const firstContract = provider.open(await FirstContract.fromInit(54325n));

    await firstContract.send(provider.sender(), 
    {value: toNano("0.02")}, 
    {$$type: "Add", amount: 5n}
    )

    // run methods on `firstContract`
}
