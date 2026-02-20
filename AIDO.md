
# AIDO

**Definitions**

- _AI Agent_ is the AI tool being used, e.g. ChatGPT, Claude, etc.
- _AI User_ is the agent, usually human, that is using the AI Agent to perform tasks.

AIDO is a system for prompting AI Agents within a programming code file that tries to blend and optimise the users expertise and uncodifiable knowledge with the AI Agent's speed and access to the worlds codified knowledge.

Typically, AI Users write a prompt, submit it to the AI Agent for execution, review the output, then repeat. With AIDO, multiple individual prompts are written within a code file for an AI Agent to execute when instructed. The AI User will usually tell the AI Agent when to do this. But there's no reason why the AI Agent could not periodically scan a file for new instructions (ideally checking the file isn't currently being modified and it's last modification was more than a few moments ago to minimise code change conflicts and premature execution of instructions).

## `AIDO`

_AIDO_ is a general TODO for the AI Agent. It must be followed by a prompt.

```js
function containsPoint_1(shape, point) {
	// AIDO Implement this function that returns true if the point argument is contained within the shape argument. A point is an array with an x then a y value, i.e. [x, y]. Shape is an array of points (verticies), e.g. [[5,5], [10, 5], [20, 20], [5, 15]].
}
```

## `AIGEN`

_AIGEN_ instructs the AI agent to implement the function. It analyses the function documentation, parameters, and any comments to determine what should be implemented and how it should be done. It's equivlent to the prompt: `Implement this function`.

It allows the AI User to provide the skeleton and documentation for a function while leaving the more tedious implementation work to the AI Agent. By specifing the interface, the AI User provides context to the AI Agent in the form of the function signature and documentation, i.e. it provides a framework and constraints for the AI that are present in non AI generated code.

By combing the architectural expertise of the AI User with the speed of the AI Agent this should result in better overall result. The cost is that the AI User must determine and write the function signature and documentation. This could be paired with an AI User written test that the AI Agent could use to verify it's generated code works as expected.

```js
// Returns true if the point argument is contained within
// the shape argument. The point must be in the format:
// [x, y]. Shape is an array of points (verticies),
// e.g. [[5,5], [10, 5], [20, 20], [5, 15]].
function containsPoint_2(shape, point) {
	// AIGEN
}
```

## `AIFAIL`

If the AI Agent could not completed then the request, it will leave an _AIFAIL_ comment detailing what went wrong and usually some options the AI User can take to fix the issue, e.g. providing more context or precision in task instructions. 
