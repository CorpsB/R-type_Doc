var ProtocolTypes_8hpp =
[
    [ "protocol::packet_header_t", "namespaceprotocol.html#structprotocol_1_1packet__header__t", [
      [ "ack", "namespaceprotocol.html#ad2d0d2f6fec7bca7d87c441b6c624414", null ],
      [ "ack_bits", "namespaceprotocol.html#a3f968d42551e701e29f02d58a434912d", null ],
      [ "flags", "namespaceprotocol.html#aade9633628d71f6f1d6529721af37f3a", null ],
      [ "message_type", "namespaceprotocol.html#ad6e7d7fe7a0f9f1c7eafd4658e37dcda", null ],
      [ "payload_length", "namespaceprotocol.html#a66bb0c548ecebb0c3caa7a2caa5cb68f", null ],
      [ "sequence", "namespaceprotocol.html#ac5fb8cec44b925bb812259aff71544d8", null ]
    ] ],
    [ "protocol::transmit_failed_t", "namespaceprotocol.html#structprotocol_1_1transmit__failed__t", [
      [ "message_type", "namespaceprotocol.html#a484352c0ef4999b7e4eee4f2826bea2c", null ],
      [ "payload", "namespaceprotocol.html#ad7b1ce8b5dc9c0b9bf8dd3c91d39e49b", null ],
      [ "remote", "namespaceprotocol.html#aa1658d3c8c5ff7f24f251675b35ba98a", null ],
      [ "sequence", "namespaceprotocol.html#a6f0f7eb64abe9990f1cdbff7050ef69f", null ]
    ] ],
    [ "protocol::packet_t", "namespaceprotocol.html#structprotocol_1_1packet__t", [
      [ "header", "namespaceprotocol.html#ad619a28d2ad425b93f5b98f0ef6c87c5", null ],
      [ "payload", "namespaceprotocol.html#a83d23715dda6bc42f3c532dab1b66f0e", null ],
      [ "remote", "namespaceprotocol.html#a2065cc3a358b90fd7e5cc84fb18053ff", null ]
    ] ],
    [ "protocol::pending_send_t", "namespaceprotocol.html#structprotocol_1_1pending__send__t", [
      [ "attempts", "namespaceprotocol.html#ac8c5f01ca532f4d6a7f9efff7afa86de", null ],
      [ "last_sent", "namespaceprotocol.html#a06f6070f419ad323c15ecb893b49dc96", null ],
      [ "packet", "namespaceprotocol.html#a9eaa63af46846fe937312d691710f7aa", null ],
      [ "timer", "namespaceprotocol.html#a811b1349b8683686aeb93e4dd5aefa89", null ]
    ] ],
    [ "protocol::peer_receive_state_t", "namespaceprotocol.html#structprotocol_1_1peer__receive__state__t", [
      [ "ack_bits", "namespaceprotocol.html#aef6841bbc34c2e4991a0cca7e2effad5", null ],
      [ "buffered", "namespaceprotocol.html#ab30fc255672f83a9b479daf5063f4541", null ],
      [ "expected_sequence", "namespaceprotocol.html#aed2ba8bd6776c390c5a42cee070bc0ac", null ],
      [ "last_received", "namespaceprotocol.html#a2c16aee3b536f07499c8f383d46239c3", null ],
      [ "waiting_since", "namespaceprotocol.html#a271f6ca0bd44bb1beb832c896eb13e15", null ]
    ] ],
    [ "protocol::core_event_t", "namespaceprotocol.html#structprotocol_1_1core__event__t", [
      [ "payload", "namespaceprotocol.html#accab359991581c7c36ac10ec51b651f9", null ],
      [ "type", "namespaceprotocol.html#ae55d874a893db53b4b5b2a11ed36d19a", null ]
    ] ],
    [ "byte_buffer_t", "ProtocolTypes_8hpp.html#a36cf479faef07d87627d9391e2a5b172", null ],
    [ "core_event_payload_t", "ProtocolTypes_8hpp.html#ac847b9b6958f212382936dc0b4851282", null ],
    [ "milliseconds", "ProtocolTypes_8hpp.html#a24eb210fbfd12862d023154ee78599bc", null ],
    [ "steady_timepoint", "ProtocolTypes_8hpp.html#aeab09fcfc801d74e8e1cb9f98c6e0fed", null ],
    [ "udp", "ProtocolTypes_8hpp.html#a54806752a5448a9af07b41fdb8158a87", null ],
    [ "event_type_t", "ProtocolTypes_8hpp.html#af260499ef5bec7e4600e7a352cffd70c", [
      [ "NONE", "ProtocolTypes_8hpp.html#af260499ef5bec7e4600e7a352cffd70cab50339a10e1de285ac99d4c3990b8693", null ],
      [ "PACKET_RECEIVED", "ProtocolTypes_8hpp.html#af260499ef5bec7e4600e7a352cffd70ca5fd08bec02b2e71cb254823fbed52ef2", null ],
      [ "CONNECTION_LOST", "ProtocolTypes_8hpp.html#af260499ef5bec7e4600e7a352cffd70ca6afae85c81e24d106bec978e17b89ce7", null ],
      [ "CONNECTION_ESTABLISHED", "ProtocolTypes_8hpp.html#af260499ef5bec7e4600e7a352cffd70ca5e95165867a108856cb05df976700b2c", null ],
      [ "TRANSMIT_FAILED", "ProtocolTypes_8hpp.html#af260499ef5bec7e4600e7a352cffd70caf8f025aba2f4634fc77839c6af60cd2c", null ]
    ] ],
    [ "flag_t", "ProtocolTypes_8hpp.html#a1d4d9634cbc99b8530d0d75ce961f0bc", [
      [ "UNRELIABLE", "ProtocolTypes_8hpp.html#a1d4d9634cbc99b8530d0d75ce961f0bca6e257e645974b9086ed66e9465e2d80c", null ],
      [ "RELIABLE_UNORDERED", "ProtocolTypes_8hpp.html#a1d4d9634cbc99b8530d0d75ce961f0bcadca71020b5250fb240f15e926d203a80", null ],
      [ "RELIABLE_ORDERED", "ProtocolTypes_8hpp.html#a1d4d9634cbc99b8530d0d75ce961f0bcac4878517fb38ded510bd28639895348b", null ]
    ] ],
    [ "MAX_PACKET_SIZE_BYTES", "ProtocolTypes_8hpp.html#aaae3d93d905456f5c8aef9422abdebc5", null ],
    [ "MAX_RETRANSMIT_ATTEMPTS", "ProtocolTypes_8hpp.html#a5f8cbc93ebc44d6da6d9e9dd0d171ad7", null ],
    [ "RESEND_MS_INTERVAL", "ProtocolTypes_8hpp.html#a0ab661cbf6acefbae0803f66ab067a1e", null ]
];