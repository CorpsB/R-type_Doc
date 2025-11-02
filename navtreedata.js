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
"AAudioDriver_8hpp.html",
"InputTypes_8hpp.html#a5265976dcf7eba98927ad1471333b1cda91d8d0b84f26c3e30fb064ea4fc1090f",
"Text_8cpp_source.html",
"classasge_1_1audio_1_1AudioManager.html#a3818a0d663415727e8cf0a1c478b98bf",
"classasge_1_1event_1_1IEvent.html#a8af584d34e37cee0a49c83914ed46be2",
"classasge_1_1job_1_1JobManager.html#adbe40b29d9afe1410160c9d36eea7dc4",
"classasge_1_1network_1_1Connection.html#acc6024983beb7a3db6ec359b20992042",
"classasge_1_1network_1_1UDPChannel.html#aa03e7f897c6e7c62574cd205ff9f6547",
"classasge_1_1renderer_1_1RaylibDriver.html#af43451205adc9acf8fbd9d3f45b89bd7",
"classasge_1_1script_1_1AScriptRuntime.html#adaa1a9fda04fb3e713478251acef1338",
"classasge_1_1script_1_1ScriptRuntime.html#ab5440563d7a1c65075a9b0b61c617385",
"classasge_1_1world_1_1EntityManager.html#ac7bc890855f7959f20821a9d5b3159df",
"classrtype_1_1client_1_1ui_1_1MultipleOption.html#a87b476b64d2101160c332527013935dd",
"functions_vars_a.html",
"namespaceasge_1_1input.html#a5265976dcf7eba98927ad1471333b1cda5415e9052565ecaf84f33d7f20996fd9",
"namespaces.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';