from stack import Stack


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)


content_stack = LimitStack(2)
content_stack.push(1)
content_stack.push(-2)
try:
    content_stack.push(3)
except StackOverflow:
    print('Não é possível adicionar outro item à pilha')