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
    [ "R‑Type Project – Multiplayer Shooter and Game Engine", "index.html", "index" ],
    [ "Developer Documentation", "md_doc_2dev__doc.html", [
      [ "1 Architecture overview", "md_doc_2dev__doc.html#autotoc_md1", [
        [ "1.1 Subsystems and layers", "md_doc_2dev__doc.html#autotoc_md2", null ],
        [ "1.2 Initialisation and main loop", "md_doc_2dev__doc.html#autotoc_md3", null ],
        [ "1.3 Entity–Component System (ECS) and scripting", "md_doc_2dev__doc.html#autotoc_md4", null ],
        [ "1.4 Networking and game protocol", "md_doc_2dev__doc.html#autotoc_md5", null ]
      ] ],
      [ "2 Compiling and running the project", "md_doc_2dev__doc.html#autotoc_md6", null ],
      [ "3 Extending the game", "md_doc_2dev__doc.html#autotoc_md7", [
        [ "3.1 Adding a new enemy archetype", "md_doc_2dev__doc.html#autotoc_md8", null ],
        [ "3.2 Creating a new level", "md_doc_2dev__doc.html#autotoc_md9", null ],
        [ "3.3 Adding a network module or message type", "md_doc_2dev__doc.html#autotoc_md10", null ]
      ] ],
      [ "4 Conventions and contribution guidelines", "md_doc_2dev__doc.html#autotoc_md11", [
        [ "4.1 Coding style", "md_doc_2dev__doc.html#autotoc_md12", null ],
        [ "4.2 Git workflow", "md_doc_2dev__doc.html#autotoc_md13", null ],
        [ "4.3 Branching and release strategy", "md_doc_2dev__doc.html#autotoc_md14", null ],
        [ "4.4 Formatting and tooling", "md_doc_2dev__doc.html#autotoc_md15", null ],
        [ "4.5 Documentation practices", "md_doc_2dev__doc.html#autotoc_md16", null ]
      ] ]
    ] ],
    [ "Network Protocol", "md_doc_2network.html", [
      [ "Overview", "md_doc_2network.html#autotoc_md19", null ],
      [ "Packet structure", "md_doc_2network.html#autotoc_md20", null ],
      [ "Message types and opcodes", "md_doc_2network.html#autotoc_md21", null ],
      [ "Channels and reliability", "md_doc_2network.html#autotoc_md22", null ],
      [ "Connection and disconnection", "md_doc_2network.html#autotoc_md23", null ],
      [ "Error handling and invalid packets", "md_doc_2network.html#autotoc_md24", null ],
      [ "Implementing a new client", "md_doc_2network.html#autotoc_md25", null ]
    ] ],
    [ "Technical & Comparative Study", "md_doc_2tec.html", [
      [ "1. Language choice: Why C++?", "md_doc_2tec.html#autotoc_md27", [
        [ "Alternatives considered", "md_doc_2tec.html#autotoc_md28", null ]
      ] ],
      [ "2. Transport protocol: Why UDP instead of TCP?", "md_doc_2tec.html#autotoc_md29", [
        [ "Alternatives considered", "md_doc_2tec.html#autotoc_md30", null ]
      ] ],
      [ "3. Network layer: Boost.Asio vs alternatives", "md_doc_2tec.html#autotoc_md31", [
        [ "Alternatives considered", "md_doc_2tec.html#autotoc_md32", null ]
      ] ],
      [ "4. Rendering and multimedia: Why raylib?", "md_doc_2tec.html#autotoc_md33", [
        [ "Comparative study of rendering libraries", "md_doc_2tec.html#autotoc_md34", null ]
      ] ],
      [ "5. Game architecture: ECS and data structures", "md_doc_2tec.html#autotoc_md35", [
        [ "Entity management", "md_doc_2tec.html#autotoc_md36", null ],
        [ "Component storage", "md_doc_2tec.html#autotoc_md37", null ],
        [ "System management", "md_doc_2tec.html#autotoc_md38", null ],
        [ "Algorithms and game logic", "md_doc_2tec.html#autotoc_md39", null ]
      ] ],
      [ "6. Storage techniques", "md_doc_2tec.html#autotoc_md40", null ],
      [ "7. Security considerations", "md_doc_2tec.html#autotoc_md41", [
        [ "Memory safety and error handling", "md_doc_2tec.html#autotoc_md42", null ],
        [ "Network integrity and buffer management", "md_doc_2tec.html#autotoc_md43", null ],
        [ "Handling untrusted clients", "md_doc_2tec.html#autotoc_md44", null ]
      ] ],
      [ "8. Summary", "md_doc_2tec.html#autotoc_md45", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
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
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"ASGE_8hpp.html",
"InputTypes_8hpp.html#a5265976dcf7eba98927ad1471333b1cdab213ce22ca6ad4eda8db82966b9b6e5a",
"UIList_8hpp.html",
"classasge_1_1audio_1_1IAudio.html#a31f5f0c0a727346873b67ec7475a0887",
"classasge_1_1input_1_1InputDevice.html#a3b6ea592931f8cc4c4cccc051e8851ec",
"classasge_1_1net_1_1GameProtocol.html#a352b95ddf69b3fba2106b3a791326406",
"classasge_1_1network_1_1NetworkChannel.html#a6f45c00de92fcda1f5a5732cd9bea5e5",
"classasge_1_1plugin_1_1PluginManager.html#ace2978a84ad5d7dd9ec30eef1a87df3f",
"classasge_1_1scene_1_1IScene.html",
"classasge_1_1script_1_1LevelSpawner.html#ac37f3e5470a2948a7f988f4099a0c9d4",
"classasge_1_1timer_1_1ITimer.html#a68c5a78212a9f1cf21239de0108fc59b",
"classasge_1_1world_1_1systems_1_1PlayerSystem.html",
"dir_97aefd0d527b934f1d99a682da8fe6a9.html",
"namespaceasge_1_1components.html#a806fc9d3301cce6bb6507b8a1dac33acaae1459f822fbba9afdcd771a1a69fa26",
"namespaceasge_1_1scene.html#acc2d023018367eadd196842f6e0f0698"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';