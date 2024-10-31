create-canisters:
	dfx canister create --all
	dfx generate backend
	dfx generate ic_siwe_provider
	dfx generate bondtoken
	dfx generate goldtoken


deploy-provider:
	dfx deploy ic_siwe_provider --argument "( \
	    record { \
	        domain = \"127.0.0.1\"; \
	        uri = \"http://127.0.0.1:5173\"; \
	        salt = \"salt\"; \
	        chain_id = opt 11155111; \
	        scheme = opt \"http\"; \
	        statement = opt \"Login to the SIWE/IC\"; \
	        sign_in_expires_in = opt 300000000000; /* 5 minutes */ \
	        session_expires_in = opt 604800000000000; /* 1 week */ \
	        targets = opt vec { \
	            \"$$(dfx canister id ic_siwe_provider)\"; \
	            \"$$(dfx canister id backend)\"; \
	        }; \
	    } \
	)"
deploy-bondtoken:
	dfx deploy bondtoken --argument "(variant { Init = \
		record { \
			token_symbol = \"ASTb\"; \
			token_name = \"Astit Bond Token\"; \
			token_decimals = 2; \
			minting_account = record { owner = principal \"$$(dfx identity get-principal)\" }; \
			transfer_fee = 10_000; \
			metadata = vec {}; \
			initial_balances = vec { record { record { owner = principal \"$$(dfx identity get-principal)\"; }; 10_000; }; }; \
			archive_options = record { \
				num_blocks_to_archive = 1000; \
				trigger_threshold = 2000; \
				controller_id = principal \"$$(dfx identity get-principal)\"; \
			}; \
		} \
	})"
deploy-goldtoken:
	dfx deploy goldtoken --argument "(variant { Init = \
		record { \
			token_symbol = \"ASTg\"; \
			token_name = \"Astit Gold Token\"; \
			token_decimals = 4; \
			minting_account = record { owner = principal \"$$(dfx identity get-principal)\" }; \
			transfer_fee = 10_000; \
			metadata = vec {}; \
			initial_balances = vec { record { record { owner = principal \"$$(dfx identity get-principal)\"; }; 100; }; }; \
			archive_options = record { \
				num_blocks_to_archive = 1000; \
				trigger_threshold = 2000; \
				controller_id = principal \"$$(dfx identity get-principal)\"; \
			}; \
		} \
	})"
deploy-backend:
	dfx deploy backend

deploy-frontend:
	pnpm install
	dfx deploy frontend

deploy-all: create-canisters deploy-provider deploy-bondtoken deploy-goldtoken deploy-backend deploy-frontend

run-frontend:
	pnpm install
	pnpm run dev 

clean:
	rm -rf .dfx
	rm -rf dist
	rm -rf node_modules
	rm -rf src/declarations
	rm -f .env
	cargo clean
