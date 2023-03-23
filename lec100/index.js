/*
javascript is a single-threaded, non-blocking, asynchronous language
It has a call-stack, a event loop and callback queue + other APIs
V8 runtime has a call-stack and a heap
heap used for memory allocation and stack used for execution context
V8 DOM, setTimeout, XML HttpRequest don't exist in V8 source code

callback
javascript has asynchronous callback for non-blocking behaviour
in nodejs, these are available as c++ APIs

task-queue
javascript can do one thing at a time, rest are pushed to the task-queue
they are then pulled and again pushed to the stack for execution

event-loop
javascript has a runtime model based on event-loop responsible for executing code, collecting and processing event, executing queued sub-tasks
the event-loop pushes task form task-queue to the call-stack

reference (event-loop)
latentflip.com
*/
