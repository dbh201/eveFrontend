PS3='Select file: '
OPTIONS=( `find . -name "*.scss" | xargs` )
select opt in "${OPTIONS[@]}"
do
	vi $opt;
done
echo 
