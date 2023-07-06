export function wrapper(requestSchema, handler) {
    return async function (request, response) {
        let requestBody = await requestSchema.safeParseAsync(request.body);
        if (!requestBody.success) {
            response.status(400);
            response.send('Invalid request body');
            return;
        }
        try {
            let responseBody = await handler(requestBody.data);
            response.status(200);
            response.json(responseBody);
            return;
        }
        catch (error) {
            if (error instanceof Error) {
                response.status(400);
                response.send(error.message);
                return;
            }
            else {
                response.status(500);
                response.send('Internal server error');
                return;
            }
        }
    };
}
