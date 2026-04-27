#CEFALEAS

'''
Signos de alarma (escala de SNOOOP-10)
'''

#Sistémicos

## Hipertensión arterial (guía ESC 2026)

def tension(PAS, PAD):
    '''
        args:
        PAS -> Presion Arterial Sistólica
        PAD -> Presión Arterial Distólica
        return:
        la funcion devuelve el estado de la presion arterial según la guía ESC 2026
    '''

    try:
        if(PAS >= 140 and PAD >= 90): #NOTA: Preguntarle a Manu si el rango de presión es inclusivo o exclusivo en cuanto al intervalo mayor o menor
        
            return 'Hipertensión'
        
        elif((PAS >= 120 and PAS < 140) and ((PAD >= 70) and PAD < 90)):
            
            return 'Tensión elevada'
        
        elif(PAS < 120 and PAD < 70):

            return 'Tensión no elevada'
        
    except Exception as e:
        return 'Error: ' + e

#test hipertension positiva

print(tension(140, 90)) # Expected -> 1

print(tension(180, 100)) # Expected -> 1


    

    