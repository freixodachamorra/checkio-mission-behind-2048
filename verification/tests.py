"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""

WIN = [['U', 'W', 'I', 'N'], ['U', 'W', 'I', 'N'], ['U', 'W', 'I', 'N'], ['U', 'W', 'I', 'N']]
LOSE = [['G', 'A', 'M', 'E'],
        ['O', 'V', 'E', 'R'],
        ['G', 'A', 'M', 'E'],
        ['O', 'V', 'E', 'R']]

TESTS = {
    "Basics": [
        {
            "input": ([[0, 2, 0, 0],
                       [0, 0, 0, 0],
                       [0, 0, 0, 0],
                       [0, 2, 0, 0]], 'up'),
            "answer": [[0, 4, 0, 0],
                       [0, 0, 0, 0],
                       [0, 0, 0, 0],
                       [0, 0, 0, 2]]
        },
        {
            "input": ([[4, 0, 0, 0],
                       [0, 4, 0, 0],
                       [0, 0, 0, 0],
                       [0, 0, 8, 8]], 'right'),
            "answer": [[0, 0, 0, 4],
                       [0, 0, 0, 4],
                       [0, 0, 0, 0],
                       [0, 0, 2, 16]]
        },

        {
            "input": ([[256, 0, 256, 4],
                       [16, 8, 8, 0],
                       [32, 32, 32, 32],
                       [4, 4, 2, 2]], 'right'),
            "answer": [[256, 0, 512, 4],
                       [0, 0, 16, 16],
                       [0, 0, 64, 64],
                       [0, 0, 8, 4]]
        },
        {
            "input": ([[4, 4, 0, 0],
                       [0, 4, 1024, 0],
                       [0, 256, 0, 256],
                       [0, 1024, 1024, 8]], 'down'),
            "answer": WIN
        },
        {
            "input": ([[2, 4, 8, 16],
                       [32, 64, 128, 256],
                       [512, 1024, 2, 4],
                       [8, 16, 32, 64]], 'left'),
            "answer": LOSE
        },
    ]
}
