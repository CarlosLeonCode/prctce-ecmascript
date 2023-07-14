const regex = /(\d{4})-(\d{2})-(\d{2})/
const match = regex.exec('2024-04-12')
console.table(match)
/*
| (index) |    Values    |
--------------------------
|    0    | '2024-04-12' |
|    1    |    '2024'    |
|    2    |     '04'     |
|    3    |     '12'     |
|  index  |      0       |
|  input  | '2024-04-12' |
| groups  |  undefined   |
*/
