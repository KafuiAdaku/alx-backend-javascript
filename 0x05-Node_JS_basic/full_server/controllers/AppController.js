class AppController {
    static getHomepage(request, response) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write('Hello Holberton School!');
    }
}