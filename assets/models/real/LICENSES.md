# MakeHuman rider bodies (appearance of the riders)

| File | Content | Licence | Source |
| --- | --- | --- | --- |
| `mh_rider_f.glb` | Female rider: body, skin, eyes, lashes, brows, hair (ponytail), shirt, jacket, breeches, tall boots; 53-bone "game_engine" skeleton | CC0-1.0 | [kblood/CharacterCreator](https://github.com/kblood/CharacterCreator/tree/852e48f316b90a0937234886630e4fb4cdfd1f78/output), commit `852e48f` — MakeHuman community assets (CC0) |
| `mh_rider_m.glb` | Male rider: same, short hair | CC0-1.0 | idem |

These are the unmodified files `public/real/rider_f.glb` / `rider_m.glb` of Equestrian Tour (`anquetin10-cpu/Game_strides`,
branch `claude/strides-ui-iphone`, `7695dcf`), built there by `scripts/real/build-humans.mjs`; reused here with the
agreement of the owner of both games. CC0: no attribution required, given as a courtesy.
In Jumping League Sim they are tinted (team jacket, white shirt/breeches, black boots/gloves, skin/hair per rider),
fitted with the game's helmet and posed by the Rocketbox rig of `src/render/rider/RiderView.ts` (see `RealRider.ts`).
