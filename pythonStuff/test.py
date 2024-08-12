from nba_api.stats.endpoints import playercareerstats
from nba_api.stats.static import players
import json

# Nikola Jokić
career = playercareerstats.PlayerCareerStats(player_id='203999') 

# pandas data frames (optional: pip install pandas)
career.get_data_frames()[0]

# json
data = career.get_json()

json_string = json.dumps(data)
#print(json_string)
# dictionary
jokic_obj = career.get_dict()
'''
keysList = list(jokic_obj.keys())
print(keysList)
results = jokic_obj["resultSets"]
#print(jokic_obj["resultSets"])

for x in results:
  if len(x["rowSet"]) > 0:
    for y in x["rowSet"]:
        i = 0
        while(i < len(y)):
            print(str(x["headers"][i]) + ": " + str(y[i]))
            i += 1
        print("\n")
''' 

nbaPlayers = players.get_active_players()

'''
for dude in nbaPlayers:
    print(dude)
'''

with open('out.txt', 'w') as f:
    print(json.dumps(nbaPlayers), file=f)

    

  

  
  

