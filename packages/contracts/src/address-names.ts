type addrNames = {
  [key: string]: string
}

/**
 * For contracts and accounts used in the Address Manager, this object defines the correct names to be used in
 * the Address Manager and deployment artifacts.
 */
export const managedNames: { [key: string]: addrNames } = {
  deployedContracts: {
    storageContainerCtc: 'ChainStorageContainer-CTC-batches',
    storageContainerScc: 'ChainStorageContainer-SCC-batches',
    canonicalTransactionChain: 'CanonicalTransactionChain',
    stateCommitmentChain: 'StateCommitmentChain',
    bondManager: 'BondManager',
    implL1CrossDomainMessenger: 'OVM_L1CrossDomainMessenger',
    proxyL1CrossDomainMessenger: 'Proxy__OVM_L1CrossDomainMessenger',
    proxyL1StandardBridge: 'Proxy__OVM_L1StandardBridge',
  },
  accounts: { sequencer: 'OVM_Sequencer', proposer: 'OVM_Proposer' },
}

/**
 * For contracts not listed in the Address Manager, this object defines the correct names to be used
 * in deployment artifacts.
 */
export const unmanagedNames: addrNames = {
  addressDictator: 'AddressDictator',
  chugsplashDictator: 'ChugsplashDictator',
  addressManager: 'Lib_AddressManager',
}
