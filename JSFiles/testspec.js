"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('protractor with typescript typings', () => {
    beforeEach(() => {
        protractor_1.browser.get('http://www.angularjs.org');
    });
    it('should greet the named user', () => {
        protractor_1.element(protractor_1.by.model('yourName')).sendKeys('Julie');
        let greeting = protractor_1.element(protractor_1.by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Julie!');
    });
    it('should list todos', function () {
        let todoList = protractor_1.element.all(protractor_1.by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(2);
        expect(todoList.get(1).getText()).toEqual('build an angular app');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErRTtBQUUvRSxRQUFRLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxFQUFFO0lBQ2xELFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxvQkFBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtRQUNyQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtRQUN0QixJQUFJLFFBQVEsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9