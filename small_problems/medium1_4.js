const TOKENS = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP', 'PRINT'];
// minilang('PRINT');
// 0
// minilang('5 PUSH 3 MULT PRINT');
// 15
// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8
// minilang('5 PUSH POP PRINT');
// // 5
// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7
// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6
// minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// // 12
minilang('5 SUB PRINT');
// // 8
minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

function minilang(commands) {
  let stack = [];
  let register = 0;
  let program = commands.split(' ').map(command => {
    if (Number.isInteger(Number(command))) {
      return Number(command);
    }
    return command;
  });

  for (let command of program) {
    if (Number.isInteger(command)) {
      register = command;
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (command === 'ADD') {
      if (stack.length === 0) error();
      register += stack.pop();
    } else if (command === 'SUB') {
      if (stack.length === 0) error();
      register -= stack.pop();
    } else if (command === 'MULT') {
      if (stack.length === 0) error();
      register *= stack.pop();
    } else if (command === 'DIV') {
      if (stack.length === 0) error();
      register = Number.parseInt(register / stack.pop());
    } else if (command === 'MOD') {
      if (stack.length === 0) error();
      register = Number.parseInt(register % stack.pop());
    } else if (command === 'POP') {
      if (stack.length === 0) error();
      register = stack.pop();
    } else if (command === 'PRINT') {
      console.log(register)
    } else if (!TOKENS.includes(command)) {
      console.log(`ERROR: '${command}' is not a acceptable token`);
    }
  }
}

function error() {
  console.log('ERROR: Stack is empty.')
}

  // if program ele is val, place in register
  // if PUSH, push register val onto stack, leave register
  // if ADD, pop value from stack and add to register value, store in register
  //SUB, pop value from stack and subtract it from register value, store in register
  // MULT, pop value from stack and multiply it by register val, store in register
  //DIV, pop a value from stack, and divide it into register value, store integer result in register
  //MOD, pop a value from stack, and divide it into register value, store integer REMAINDER in the register
  //POP, remove the topmost item from the stack and place in register
  //Print the register value