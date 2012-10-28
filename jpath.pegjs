jpath
  = step jpath
  / predicate jpath
  / ''

step
  = '.' name

predicate
  = '[' expr ']'

expr
  = or

or
  = and '||' or
  / and

and
  = cmp '&&' and
  / cmp

cmp
  = op '<' op
  / op '>' op
  / op '>=' op
  / op '<=' op
  / '!' op
  / op

op
  = step
  / digit
  / string

name
  = [a-z]+

digit
  = [0-9]+

string
  = '"' [a-z]* '"'

