/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "r-type", "index.html", [
    [ "Overview", "index.html#autotoc_md18", null ],
    [ "Technologies Used", "index.html#autotoc_md20", null ],
    [ "Requirements", "index.html#autotoc_md22", null ],
    [ "Building the Project", "index.html#autotoc_md24", [
      [ "Step 1: Install dependencies", "index.html#autotoc_md25", [
        [ "Linux", "index.html#autotoc_md26", null ],
        [ "Windows", "index.html#autotoc_md27", null ]
      ] ],
      [ "Step 2: Build", "index.html#autotoc_md29", [
        [ "Linux", "index.html#autotoc_md30", null ],
        [ "Windows", "index.html#autotoc_md31", null ]
      ] ],
      [ "Step 3: Run", "index.html#autotoc_md33", [
        [ "Linux", "index.html#autotoc_md34", null ],
        [ "Windows", "index.html#autotoc_md35", null ]
      ] ]
    ] ],
    [ "Server Usage", "index.html#autotoc_md37", null ],
    [ "Unit Tests", "index.html#autotoc_md39", null ],
    [ "Project Structure", "index.html#autotoc_md43", null ],
    [ "License", "index.html#autotoc_md45", null ],
    [ "Contributors", "index.html#autotoc_md47", null ],
    [ "00_overview", "md_Doc_200__overview.html", null ],
    [ "Why We Chose Boost.Asio for the R-Type Network Layer", "md_Doc_2Boost_8asio.html", null ],
    [ "Contributing Guide", "md_Doc_2Contributing.html", [
      [ "1. Git Workflow", "md_Doc_2Contributing.html#autotoc_md69", null ],
      [ "2. Commit Convention", "md_Doc_2Contributing.html#autotoc_md71", [
        [ "Format", "md_Doc_2Contributing.html#autotoc_md72", null ],
        [ "Allowed Emojis", "md_Doc_2Contributing.html#autotoc_md73", null ]
      ] ],
      [ "3. Pull Requests", "md_Doc_2Contributing.html#autotoc_md75", null ],
      [ "4. Code Style and Quality", "md_Doc_2Contributing.html#autotoc_md77", null ],
      [ "5. Documentation", "md_Doc_2Contributing.html#autotoc_md79", null ],
      [ "6. CI/CD and Releases", "md_Doc_2Contributing.html#autotoc_md81", null ],
      [ "7. Communication", "md_Doc_2Contributing.html#autotoc_md83", null ],
      [ "8. License", "md_Doc_2Contributing.html#autotoc_md85", null ],
      [ "Final Notes", "md_Doc_2Contributing.html#autotoc_md87", null ]
    ] ],
    [ "R-Type — Developer Documentation", "md_Doc_2Developer__doc.html", [
      [ "1. High-Level Overview", "md_Doc_2Developer__doc.html#autotoc_md90", [
        [ "Key goals", "md_Doc_2Developer__doc.html#autotoc_md91", null ]
      ] ],
      [ "2. Repository & Build Layout", "md_Doc_2Developer__doc.html#autotoc_md93", null ],
      [ "3. ECS Architecture (Common/ECS)", "md_Doc_2Developer__doc.html#autotoc_md95", [
        [ "3.1 Core Managers", "md_Doc_2Developer__doc.html#autotoc_md96", [
          [ "Mermaid — Manager Interaction", "md_Doc_2Developer__doc.html#autotoc_md97", null ]
        ] ],
        [ "3.2 Components (Attributes)", "md_Doc_2Developer__doc.html#autotoc_md98", null ],
        [ "3.3 Systems", "md_Doc_2Developer__doc.html#autotoc_md99", [
          [ "Mermaid — Collision Broadphase/Narrowphase", "md_Doc_2Developer__doc.html#autotoc_md100", null ]
        ] ],
        [ "3.4 Extending the ECS", "md_Doc_2Developer__doc.html#autotoc_md101", null ]
      ] ],
      [ "4. Networking Architecture (Common/Protocol)", "md_Doc_2Developer__doc.html#autotoc_md103", [
        [ "4.1 Low-level UDP Core: <tt>Protocol</tt>", "md_Doc_2Developer__doc.html#autotoc_md104", [
          [ "Mermaid — Send Path", "md_Doc_2Developer__doc.html#autotoc_md105", null ],
          [ "Mermaid — Receive Path", "md_Doc_2Developer__doc.html#autotoc_md106", null ]
        ] ],
        [ "4.2 Game-level Facade: <tt>GameProtocol</tt>", "md_Doc_2Developer__doc.html#autotoc_md107", null ]
      ] ],
      [ "5. Client Architecture (Client/)", "md_Doc_2Developer__doc.html#autotoc_md109", null ],
      [ "6. Server Architecture (Server/)", "md_Doc_2Developer__doc.html#autotoc_md111", null ],
      [ "7. Performance Notes", "md_Doc_2Developer__doc.html#autotoc_md113", [
        [ "7.1 ECS Storage & Cache Locality", "md_Doc_2Developer__doc.html#autotoc_md114", null ],
        [ "7.2 Collision World", "md_Doc_2Developer__doc.html#autotoc_md115", null ],
        [ "7.3 Networking", "md_Doc_2Developer__doc.html#autotoc_md116", null ],
        [ "7.4 Multithreading & IO", "md_Doc_2Developer__doc.html#autotoc_md117", null ],
        [ "7.5 Allocation & Copies", "md_Doc_2Developer__doc.html#autotoc_md118", null ]
      ] ],
      [ "8. Windows & Linux Constraints", "md_Doc_2Developer__doc.html#autotoc_md120", null ],
      [ "9. Adding Features", "md_Doc_2Developer__doc.html#autotoc_md122", [
        [ "9.1 New Message Type (network)", "md_Doc_2Developer__doc.html#autotoc_md123", null ],
        [ "9.2 New System (gameplay)", "md_Doc_2Developer__doc.html#autotoc_md124", null ],
        [ "9.3 New Component", "md_Doc_2Developer__doc.html#autotoc_md125", null ]
      ] ],
      [ "10. Testing", "md_Doc_2Developer__doc.html#autotoc_md127", null ],
      [ "11. Logging & Error Handling", "md_Doc_2Developer__doc.html#autotoc_md129", null ],
      [ "12. Configuration & CLI", "md_Doc_2Developer__doc.html#autotoc_md131", null ],
      [ "13. Diagrams — End-to-End", "md_Doc_2Developer__doc.html#autotoc_md133", [
        [ "13.1 Client/Server Data Flow", "md_Doc_2Developer__doc.html#autotoc_md134", null ],
        [ "13.2 ECS Update Loop (Server)", "md_Doc_2Developer__doc.html#autotoc_md135", null ]
      ] ],
      [ "14. Roadmap & Extension Ideas", "md_Doc_2Developer__doc.html#autotoc_md137", null ],
      [ "15. References (Code Pointers)", "md_Doc_2Developer__doc.html#autotoc_md139", null ]
    ] ],
    [ "ECS Architecture Justification", "md_Doc_2ecs.html", [
      [ "Introduction", "md_Doc_2ecs.html#autotoc_md142", null ],
      [ "Why ECS?", "md_Doc_2ecs.html#autotoc_md144", [
        [ "1. Modularity and Separation of Concerns", "md_Doc_2ecs.html#autotoc_md145", null ],
        [ "2. Performance Benefits", "md_Doc_2ecs.html#autotoc_md147", [
          [ "Key performance advantages:", "md_Doc_2ecs.html#autotoc_md148", null ]
        ] ],
        [ "3. Scalability and Maintainability", "md_Doc_2ecs.html#autotoc_md150", null ]
      ] ],
      [ "Integration with Networking (Boost.Asio)", "md_Doc_2ecs.html#autotoc_md152", null ],
      [ "Integration with Rendering (Raylib)", "md_Doc_2ecs.html#autotoc_md154", null ],
      [ "Cross-Platform Considerations", "md_Doc_2ecs.html#autotoc_md156", null ],
      [ "Summary", "md_Doc_2ecs.html#autotoc_md158", null ],
      [ "Conclusion", "md_Doc_2ecs.html#autotoc_md160", null ]
    ] ],
    [ "Network Protocol Specification (UDP)", "md_Doc_2network__protocol.html", [
      [ "1. Overview", "md_Doc_2network__protocol.html#autotoc_md163", null ],
      [ "2. Design Goals", "md_Doc_2network__protocol.html#autotoc_md165", null ],
      [ "3. Transport", "md_Doc_2network__protocol.html#autotoc_md167", null ],
      [ "4. Packet Header (Wire Format)", "md_Doc_2network__protocol.html#autotoc_md169", [
        [ "4.1 Fields", "md_Doc_2network__protocol.html#autotoc_md170", null ],
        [ "4.2 Serialization", "md_Doc_2network__protocol.html#autotoc_md171", null ]
      ] ],
      [ "5. Reliability & Ordering", "md_Doc_2network__protocol.html#autotoc_md173", [
        [ "5.1 Flags", "md_Doc_2network__protocol.html#autotoc_md174", null ]
      ] ],
      [ "6. Sequence, ACK, and ACK Bits", "md_Doc_2network__protocol.html#autotoc_md176", [
        [ "6.1 Sender sequences", "md_Doc_2network__protocol.html#autotoc_md177", null ],
        [ "6.2 Receiver ACK window", "md_Doc_2network__protocol.html#autotoc_md178", null ]
      ] ],
      [ "7. Retransmission Policy", "md_Doc_2network__protocol.html#autotoc_md180", [
        [ "7.1 Pending table", "md_Doc_2network__protocol.html#autotoc_md181", null ],
        [ "7.2 Resend/Fail workflow", "md_Doc_2network__protocol.html#autotoc_md182", null ]
      ] ],
      [ "8. Ordered Delivery", "md_Doc_2network__protocol.html#autotoc_md184", [
        [ "8.1 Timeout-based advancement", "md_Doc_2network__protocol.html#autotoc_md185", null ],
        [ "8.2 Buffer expiry", "md_Doc_2network__protocol.html#autotoc_md186", null ]
      ] ],
      [ "9. Event Model", "md_Doc_2network__protocol.html#autotoc_md188", null ],
      [ "10. Application Message Types", "md_Doc_2network__protocol.html#autotoc_md190", null ],
      [ "11. Example Wire Packet", "md_Doc_2network__protocol.html#autotoc_md192", null ],
      [ "12. Error Handling & Resilience", "md_Doc_2network__protocol.html#autotoc_md194", null ],
      [ "13. Timing & Tuning", "md_Doc_2network__protocol.html#autotoc_md196", null ],
      [ "14. Security Considerations", "md_Doc_2network__protocol.html#autotoc_md198", null ],
      [ "15. Interoperability & Platform Constraints", "md_Doc_2network__protocol.html#autotoc_md200", null ],
      [ "16. Sequence Diagrams", "md_Doc_2network__protocol.html#autotoc_md202", [
        [ "16.1 Reliable Unordered send/ack", "md_Doc_2network__protocol.html#autotoc_md203", null ],
        [ "16.2 Reliable Ordered with gap and advancement", "md_Doc_2network__protocol.html#autotoc_md204", null ]
      ] ],
      [ "17. Versioning & Extensibility", "md_Doc_2network__protocol.html#autotoc_md206", null ],
      [ "18. Implementation Pointers", "md_Doc_2network__protocol.html#autotoc_md208", null ],
      [ "19. Compliance Checklist", "md_Doc_2network__protocol.html#autotoc_md210", null ],
      [ "20. Glossary", "md_Doc_2network__protocol.html#autotoc_md212", null ]
    ] ],
    [ "Why We Chose Raylib for the Game Rendering and Input System", "md_Doc_2RayLib.html", null ],
    [ "Topics", "topics.html", "topics" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"Client_2Game_2UI_2Sprite_2Sprite_8hpp.html",
"Score_8hpp.html#a9cca84d436c00df4b5b53cacbdbce1c2",
"classrtype_1_1client_1_1InputManager.html#a5bc1dd1088a23359534c8f092f48c6ca",
"classrtype_1_1ecs_1_1CollisionWorld.html#a6e1bc93414e78c8a3b05569d7d758837",
"functions_func_r.html",
"namespacearcade_1_1types.html#ab007be3b7905ab104d0f7bc1eaeecd50ab34a9cda492222e4af2466953a085e32",
"struct_8hpp.html#a486c77632eb0d8d22b5e643dc4d55300a643ec8c5754d42c65fc955e91e867910"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';