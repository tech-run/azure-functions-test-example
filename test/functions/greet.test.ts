import { describe, expect, test } from "@jest/globals";
import { InvocationContext, HttpRequest } from "@azure/functions"; 
import { Greet}  from '../../src/functions/greet'

describe("Greet", () => {
    test("greets the user by the supplied name", async () => {
        const context = new InvocationContext({ functionName: 'Greet' });

        const request = new HttpRequest({
            url: 'http://localhost:7071/api/Greet', 
            method: 'POST', 
            query: {name: "andrew"}
        });
        const expected = { body: 'Hello, andrew! This HTTP triggered function executed successfully.' };
        expect(await Greet(request, context)).toStrictEqual(expected);
    });

    test("greets the user without a name", async () => {
        const context = new InvocationContext({ functionName: 'Greet' });

        const request = new HttpRequest({
            url: 'http://localhost:7071/api/Greet', 
            method: 'POST', 
        });
        const expected = { body: 'Hello, world! This HTTP triggered function executed successfully.' };
        expect(await Greet(request, context)).toStrictEqual(expected);
    });
});