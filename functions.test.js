const functions = require('./functions')

test('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4) // a reminder that functions is getting imported
})

test('adds 2 + 2 to equal 5', () => {
    expect(functions.add(2,2)).not.toBe(5)
})

test('should be null', () => {
    expect(functions.isNull()).toBeNull
})

test('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy
})

test('User should equal Kuma Dog object', () => {
    expect(functions.createUser()).toEqual({firstName: 'Kuma', lastName: 'Dog'})
})

// logic can be in the test
test('function.add logic can be in test', () => {
    const functions = {
        add: (num1, num2) => num1 + num2,
    }
    expect(functions.add(2,2)).toBe(4)
})

// test arrays
test('admin should be in usernames', () => {
    let usernames =  ['kuma', 'sam', 'admin']
    expect(usernames).toContain('admin')
})

// working with promise async data 
test('Promises: User fetched name should be Leanne Graham', () => {
    expect.assertions(1) // used when testing async to make sure that a promise actually gets called
    // need to return promise or test will complete before the request
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

//working with async/await data
test('async/await: User fetched name should be Leanne Graham', async () => {
    expect.assertions(1) // used when testing async to make sure that a promise actually gets called
    // need to return promise or test will complete before the request
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
})

//lifecycle type methods
// const initDatabase = () => console.log('Database Initialized')
// const closeDatabase = () => console.log('Database Closed')
// //run the above before/after each test
// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())
// //run the above before/after all tests
// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

const nameCheck = () => console.log('Checking name...')

describe('Checking Names', () => {
    beforeEach(() => nameCheck()); //runs before the test below

    test('User is Kuma', () => {
        const user = 'Kuma'
        expect(user).toBe('Kuma')
    })
})

