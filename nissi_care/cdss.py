#CEFALEAS

'''
1. Signos de alarma (escala de SNOOOP-10)
'''

dolor_cabeza = True

fiebre = bool(input('fiebre?'))
tension_alta = bool(input('tension alta?'))
cancer = bool(input('cancer?'))


if(fiebre):
    print('cefalea secundaria')

elif(tension_alta):
    print('cefalea secundaria')

elif(cancer):
    print('cefalea secundaria')

else:
    print('ERROR')