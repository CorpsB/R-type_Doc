var classasge_1_1network_1_1NetworkManager =
[
    [ "ConnTx", "classasge_1_1network_1_1NetworkManager.html#structasge_1_1network_1_1NetworkManager_1_1ConnTx", [
      [ "in_flight", "classasge_1_1network_1_1NetworkManager.html#a1dcd2672ec049860154b633913ec5a15", null ],
      [ "queue", "classasge_1_1network_1_1NetworkManager.html#a5a8e80138f705f09475ac2d15e37a852", null ]
    ] ],
    [ "InFlight", "classasge_1_1network_1_1NetworkManager.html#structasge_1_1network_1_1NetworkManager_1_1InFlight", [
      [ "address", "classasge_1_1network_1_1NetworkManager.html#a0eb22f37a8ba735609224d8468bb443c", null ],
      [ "channel", "classasge_1_1network_1_1NetworkManager.html#a1436db0e68f4025bfd594dd44d322f12", null ],
      [ "lastSend", "classasge_1_1network_1_1NetworkManager.html#a3b17de67ab440b682b0359aa978282b7", null ],
      [ "packet", "classasge_1_1network_1_1NetworkManager.html#a53acd8183886114f8a652bb4d36a247e", null ],
      [ "port", "classasge_1_1network_1_1NetworkManager.html#a9e3d2d3945d40e3679bb6cedb3451239", null ],
      [ "rto", "classasge_1_1network_1_1NetworkManager.html#a8e8fa05b78d2e7455d9fcd09fa8f6ca0", null ],
      [ "seq", "classasge_1_1network_1_1NetworkManager.html#a8e4ba89a08c7e50f82f184911cba78fd", null ]
    ] ],
    [ "Pending", "classasge_1_1network_1_1NetworkManager.html#structasge_1_1network_1_1NetworkManager_1_1Pending", [
      [ "channel", "classasge_1_1network_1_1NetworkManager.html#a5edde4c4e7a5c7027cf1f263b7fa9b33", null ],
      [ "data", "classasge_1_1network_1_1NetworkManager.html#ae58591b04c4bd18995292480821fa6ab", null ]
    ] ],
    [ "Todo", "classasge_1_1network_1_1NetworkManager.html#structasge_1_1network_1_1NetworkManager_1_1Todo", [
      [ "connId", "classasge_1_1network_1_1NetworkManager.html#a4244fbf7eb2df79eee5eb281a0b6c7d8", null ],
      [ "seq", "classasge_1_1network_1_1NetworkManager.html#a821c69a9572b83942b01b3153dc982dc", null ]
    ] ],
    [ "Handler", "classasge_1_1network_1_1NetworkManager.html#a3ba848904374e643f35ee9bddd4dc053", null ],
    [ "NetworkManager", "classasge_1_1network_1_1NetworkManager.html#a7a328e67f276054858a0f4b6610c17c3", null ],
    [ "~NetworkManager", "classasge_1_1network_1_1NetworkManager.html#a2b0ee482c87ba01f2282f102b7fb865a", null ],
    [ "armAndSend", "classasge_1_1network_1_1NetworkManager.html#a5fe9ad297b070e0ac76c5c41dc386ed6", null ],
    [ "connectedPeerCount", "classasge_1_1network_1_1NetworkManager.html#a27496f27483848933a9dc8895b6c6f35", null ],
    [ "connectionIds", "classasge_1_1network_1_1NetworkManager.html#a9c624c29524787d3f349dda00212a7b7", null ],
    [ "connectTo", "classasge_1_1network_1_1NetworkManager.html#a1c28297af62cc12385d94d612d6781db", null ],
    [ "getConnId", "classasge_1_1network_1_1NetworkManager.html#a27c790098d70703c0d35cf3835716f64", null ],
    [ "getOrCreateId", "classasge_1_1network_1_1NetworkManager.html#a6a18387db648f31db54e2bc67a292aad", null ],
    [ "poll", "classasge_1_1network_1_1NetworkManager.html#a54cc95be606c5e61cc72f3d42ba50ebc", null ],
    [ "processIncoming", "classasge_1_1network_1_1NetworkManager.html#a60bdcec8886944afe010d38e4ae73eb6", null ],
    [ "pumpRetransmit", "classasge_1_1network_1_1NetworkManager.html#aaef053da6a389f14494168fbb42496a0", null ],
    [ "readHeader", "classasge_1_1network_1_1NetworkManager.html#aaf1963b384d4e3df333dc82c4983df22", null ],
    [ "send", "classasge_1_1network_1_1NetworkManager.html#aab8d5403d0bdb61f4856173bcdfaba46", null ],
    [ "sendBestEffort", "classasge_1_1network_1_1NetworkManager.html#a53cc5c62d4b4c4fa472384e88e00f8d2", null ],
    [ "sendReliable", "classasge_1_1network_1_1NetworkManager.html#ab2167e47d86344577e3b97c6d24ccd4f", null ],
    [ "setHandler", "classasge_1_1network_1_1NetworkManager.html#a4d473088f0daebbb0b8c49511c8b916c", null ],
    [ "shutdown", "classasge_1_1network_1_1NetworkManager.html#a65fc96239ed7bfcb93b07bd3b275e377", null ],
    [ "startServer", "classasge_1_1network_1_1NetworkManager.html#a84e07e413055d10e5f8219b375ea64c7", null ],
    [ "writeHeader", "classasge_1_1network_1_1NetworkManager.html#a5d69936464181ef9ccac73404717ef5a", null ],
    [ "_addressToId", "classasge_1_1network_1_1NetworkManager.html#abf5c8cb32044ca40a5b4373485dd5725", null ],
    [ "_channel", "classasge_1_1network_1_1NetworkManager.html#a9aa4a3ba101faf9e84ae7cf646f8ecfd", null ],
    [ "_conn_mx", "classasge_1_1network_1_1NetworkManager.html#acd6e2be6e3cde729027179b73032c014", null ],
    [ "_connections", "classasge_1_1network_1_1NetworkManager.html#a8cb79004f5320ddaae9bcb410b2e8975", null ],
    [ "_debug", "classasge_1_1network_1_1NetworkManager.html#a48c06985fd4601206ac8e25861d901d6", null ],
    [ "_handlers", "classasge_1_1network_1_1NetworkManager.html#a9fd54aafb5d47f51746de65b4c59e972", null ],
    [ "_nextConnectionId", "classasge_1_1network_1_1NetworkManager.html#a6e01c28b82c9c355637c34af5a2379e2", null ],
    [ "_rtoMax", "classasge_1_1network_1_1NetworkManager.html#a75db4a614e9559b63ff2845b1e34fc0a", null ],
    [ "_rtoMin", "classasge_1_1network_1_1NetworkManager.html#afebba0e6f22704c8cc3a29200acf11c8", null ],
    [ "_running", "classasge_1_1network_1_1NetworkManager.html#af6a45310496cf341086466a43429389f", null ],
    [ "_tx", "classasge_1_1network_1_1NetworkManager.html#a07be4579e336421e506c79d77a71d871", null ],
    [ "_tx_mx", "classasge_1_1network_1_1NetworkManager.html#abd64d24490a295f6f7888c1cf320aabf", null ]
];