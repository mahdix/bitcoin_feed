use FindBin qw/$Bin/;
use strict;

use IO::Socket::UNIX;
my $SOCK_PATH = "bitcoin.sock";

# Client:
my $client = IO::Socket::UNIX->new(
   Type => SOCK_STREAM(),
   Peer => $SOCK_PATH,
);
$client->send('coinsetter');
while(1){
	$client->recv(my $data, 1000);
	print "$data\n";
}