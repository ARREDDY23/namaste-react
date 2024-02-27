import { sum } from "../sum";

test("Sum of two numbers",()=>{
    const result = sum(1,2);

    expect(result).toBe(3);

})