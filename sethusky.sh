echo " npx --no-install lint-staged">.husky/pre-commit
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
