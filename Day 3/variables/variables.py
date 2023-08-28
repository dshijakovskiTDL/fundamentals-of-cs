# Booleans

show_details = True # Will be stored at some address ex. 001 (hex)
# This means that at the memory location 001, there is a BINARY representation of the value TRUE
hide_price = False # 002 (hex)

# ----------------------------------------------------------------------------------------------

# Numbers

age = 24 # Will be stored at some other address ex. 004 (hex)
price = 1000 # 008 (hex)

# Keep in mind, these addresses are chosen at random, they do not reflect the real memory
# addresses that get assigned

# ----------------------------------------------------------------------------------------------

first_letter = 'A' # 012 (hex)
number_character = '2' # 016 (hex)
# In python, these are considered as STRINGS, which we will go into later
# Some examples of languages that have their own CHARACTER data type: C, C++, Java
# While these characters do appear as alpha-numeric characters, in
# memory they are stored as NUMBERS (each character corresponds to a number in the ASCII Table)
# ASCII Table https://qph.cf2.quoracdn.net/main-qimg-f492d8a71a6837bac434b6f8c7355e14
# Note: There are other encoding systems out there (UTF-8, Unicode etc) 