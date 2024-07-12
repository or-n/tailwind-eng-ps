
The first bug are the loop ranges.
The Cosmos token prices begin where the other token prices end.

I guess that the second bug are the keys.
The ranges (0, OTHER_TOKEN_IDS.length) and (0, COSMOS_TOKEN_IDS.length) overlap. Also when these arrays change, for example a token removed, a cache for some of the keys will not be valid. A token name is a better key.