export default class GreetingService {
    public sayHello = (name: string) => `Hello ${name ? name : "World"}!`
}