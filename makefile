## run test command
test:
	docker exec -it github-api yarn unit

## update the snapshopts
test-update-snapshopts:
	docker exec -it github-api yarn unit-update-snapshopts

## update the snapshopts
# ex.: make test-dev FILE="tests/unit/demo/counter.spec.js"
test-dev:
	docker exec -it github-api yarn unit-update-snapshopts ${FILE}
