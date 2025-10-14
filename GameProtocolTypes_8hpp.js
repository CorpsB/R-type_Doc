var GameProtocolTypes_8hpp =
[
    [ "protocol::game::payload_create_entity_t", "namespaceprotocol_1_1game.html#structprotocol_1_1game_1_1payload__create__entity__t", [
      [ "entity_id", "namespaceprotocol_1_1game.html#afd78b1f4927ae30d26866bc3aa2937a8", null ],
      [ "entity_type", "namespaceprotocol_1_1game.html#a6fc370cc948021a33d22001855ba7dcf", null ],
      [ "x", "namespaceprotocol_1_1game.html#ac7d6dc67a2607a11ef974b9207328067", null ],
      [ "y", "namespaceprotocol_1_1game.html#adc23f6c79ede3c4b44387d9b62c27ac7", null ]
    ] ],
    [ "protocol::game::payload_move_entity_t", "namespaceprotocol_1_1game.html#structprotocol_1_1game_1_1payload__move__entity__t", [
      [ "entity_id", "namespaceprotocol_1_1game.html#a3324ab15e6d5bbb6fa04c99584ffdc39", null ],
      [ "x", "namespaceprotocol_1_1game.html#a7e163141c29af4df5eb595ba5f632f26", null ],
      [ "y", "namespaceprotocol_1_1game.html#abbb1f311a1b3229c2c68ac012ca708ab", null ]
    ] ],
    [ "protocol::game::payload_destroy_entity_t", "namespaceprotocol_1_1game.html#structprotocol_1_1game_1_1payload__destroy__entity__t", [
      [ "entity_id", "namespaceprotocol_1_1game.html#add0a6c5fe555d80f4ae143eef224e965", null ]
    ] ],
    [ "protocol::game::payload_player_input_t", "namespaceprotocol_1_1game.html#structprotocol_1_1game_1_1payload__player__input__t", [
      [ "buttons", "namespaceprotocol_1_1game.html#ac3c97dff5a37252491f9366934801396", null ],
      [ "input_tick", "namespaceprotocol_1_1game.html#a3da8cb017014a8985f04edef508ce8c7", null ],
      [ "player", "namespaceprotocol_1_1game.html#af06031f752e8ef3902246ea9f18f5821", null ]
    ] ],
    [ "protocol::game::game_event_t", "namespaceprotocol_1_1game.html#structprotocol_1_1game_1_1game__event__t", [
      [ "payload", "namespaceprotocol_1_1game.html#aaa178d940515c73c2f0b082319929414", null ],
      [ "type", "namespaceprotocol_1_1game.html#a383feecaeb4a172a39d5fb71a65ec0d1", null ]
    ] ],
    [ "entity_id_t", "GameProtocolTypes_8hpp.html#a5748e8d4556e150c096d944b892ebef8", null ],
    [ "game_event_payload_t", "GameProtocolTypes_8hpp.html#ab3d361beba1a1c00e2b47d4b0f8d35b3", null ],
    [ "input_mask_t", "GameProtocolTypes_8hpp.html#a2964aab9b93472e0a76484074716a203", null ],
    [ "player_id_t", "GameProtocolTypes_8hpp.html#af73509b55868f0169ae63813c0f7baae", null ],
    [ "position_t", "GameProtocolTypes_8hpp.html#a6736533294d2876d3dc4bc0b248a9c97", null ],
    [ "game_event_type_t", "GameProtocolTypes_8hpp.html#ac979c495edcb78eaa548b5c7be45f118", [
      [ "NONE", "GameProtocolTypes_8hpp.html#ac979c495edcb78eaa548b5c7be45f118ab50339a10e1de285ac99d4c3990b8693", null ],
      [ "CONNECTED", "GameProtocolTypes_8hpp.html#ac979c495edcb78eaa548b5c7be45f118aa5afd6edd5336d91316964e493936858", null ],
      [ "DISCONNECTED", "GameProtocolTypes_8hpp.html#ac979c495edcb78eaa548b5c7be45f118a99c8ce56e7ab246445d3b134724428f3", null ],
      [ "CREATE_ENTITY", "GameProtocolTypes_8hpp.html#ac979c495edcb78eaa548b5c7be45f118a016e1171067ff064c151e0a5fef52ca2", null ],
      [ "MOVE_ENTITY", "GameProtocolTypes_8hpp.html#ac979c495edcb78eaa548b5c7be45f118ae66cbaf5e7fa7ca722d61f5326f418a8", null ],
      [ "DESTROY_ENTITY", "GameProtocolTypes_8hpp.html#ac979c495edcb78eaa548b5c7be45f118af399392cc4fe0ec00204f4ae5c55e64c", null ],
      [ "PLAYER_INPUT", "GameProtocolTypes_8hpp.html#ac979c495edcb78eaa548b5c7be45f118a180c1b797f83d66065d0313fa7e863d1", null ],
      [ "RAW_PACKET", "GameProtocolTypes_8hpp.html#ac979c495edcb78eaa548b5c7be45f118ab459b0b196b23ddac2d1e061943537b4", null ],
      [ "TRANSMIT_FAILED", "GameProtocolTypes_8hpp.html#ac979c495edcb78eaa548b5c7be45f118af8f025aba2f4634fc77839c6af60cd2c", null ]
    ] ],
    [ "game_message_type_t", "GameProtocolTypes_8hpp.html#ad4d21ce1bb315afe579f5abed923f701", [
      [ "UNKNOWN", "GameProtocolTypes_8hpp.html#ad4d21ce1bb315afe579f5abed923f701a696b031073e74bf2cb98e5ef201d4aa3", null ],
      [ "CREATE_ENTITY", "GameProtocolTypes_8hpp.html#ad4d21ce1bb315afe579f5abed923f701a016e1171067ff064c151e0a5fef52ca2", null ],
      [ "MOVE_ENTITY", "GameProtocolTypes_8hpp.html#ad4d21ce1bb315afe579f5abed923f701ae66cbaf5e7fa7ca722d61f5326f418a8", null ],
      [ "DESTROY_ENTITY", "GameProtocolTypes_8hpp.html#ad4d21ce1bb315afe579f5abed923f701af399392cc4fe0ec00204f4ae5c55e64c", null ],
      [ "SNAPSHOT", "GameProtocolTypes_8hpp.html#ad4d21ce1bb315afe579f5abed923f701a46b8744c6bc840d2cb241fa165f3e204", null ],
      [ "PLAYER_INPUT", "GameProtocolTypes_8hpp.html#ad4d21ce1bb315afe579f5abed923f701a180c1b797f83d66065d0313fa7e863d1", null ],
      [ "CONNECT_REQ", "GameProtocolTypes_8hpp.html#ad4d21ce1bb315afe579f5abed923f701ab772a6cd3e6b3c8294373940dd51265c", null ],
      [ "DISCONNECT_REQ", "GameProtocolTypes_8hpp.html#ad4d21ce1bb315afe579f5abed923f701adc3880a1fff2a812ed3c53af23107839", null ],
      [ "PING", "GameProtocolTypes_8hpp.html#ad4d21ce1bb315afe579f5abed923f701ae07ff41a486c27c095a15898dcca34d1", null ]
    ] ],
    [ "DEFAULT_POSITION_SCALE", "GameProtocolTypes_8hpp.html#a8ab44a0bd6915da4264d074ca1a4c87b", null ]
];